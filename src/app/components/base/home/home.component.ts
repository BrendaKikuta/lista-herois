import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}
    
  listOfHeroes: [] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    const list = this.activatedRoute.snapshot.data['heroes'];
    this.listOfHeroes = list.data.results;

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}