import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {
  constructor(
    private heroesService: HeroesService
  ) {}
    
  listOfHeroes: [] = [];
  filter: string = '';

  ngOnInit(): void {
    this.listHeroes();
  }

  listHeroes = () => {
    this.heroesService
    .getHeroes().subscribe((list) => {
      this.listOfHeroes = list.data.results;
    })
  }

  onKeyUp(target : EventTarget) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.filter = elemento.value;
    }
  }
}