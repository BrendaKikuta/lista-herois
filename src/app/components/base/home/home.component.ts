import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HeroesService } from '../../heroes/heroes.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}
    
  listOfHeroes: [] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  limit: number = 10;
  hasMore: boolean = true;
  search: string = '';

  ngOnInit(): void {
    const list = this.activatedRoute.snapshot.data['heroes'];
    this.listOfHeroes = list.data.results;

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  load = () => {
    this.heroesService.getHeroes(++this.limit)
      .subscribe((heroes: any) => {
        const list: [] = heroes.data.results;

        this.listOfHeroes.push(...list);

        if (!heroes.data.results.length || heroes.data.results.length < 10) this.hasMore = false;
      })
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}