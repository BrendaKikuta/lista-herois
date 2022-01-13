import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  
  constructor(
    private httpClient: HttpClient
    ) { }
    
  PUBLIC_KEY = '52be8a7c3525d647909ebe2870097e6c';
  HASH = 'a100544ae61d665586ea9127a5f90dce';
  API_URL = `${environment['API_URL']}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getHeroes = (): Observable<any> => {
    return this.httpClient.get(this.API_URL)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}