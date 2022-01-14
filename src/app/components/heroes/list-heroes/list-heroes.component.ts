import { Component, Input } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent {
  @Input() listOfHeroes = [];

  limit = 10;
  hasMore = true;

  constructor(
    private heroesService: HeroesService
  ) {}

  load = () => {
    this.heroesService.getHeroes(++this.limit)
      .subscribe((heroes: any) => {
        const list: [] = heroes.data.results;

        this.listOfHeroes.push(...list);

        if (!heroes.data.results.length || heroes.data.results.length < 10) this.hasMore = false;
      })
  }

}