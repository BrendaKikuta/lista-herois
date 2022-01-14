import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { HeroesService } from "../heroes.service";

@Injectable({providedIn: 'root'})

export class ListHeroesResolver implements Resolve<Observable<any>>{
    listOfHeroes: any = [];
    page: number = 1;

    constructor(
        private heroesService: HeroesService
    ) {}

    resolve(): Observable<any> {
        return this.heroesService.getHeroes(this.page);
    }
}