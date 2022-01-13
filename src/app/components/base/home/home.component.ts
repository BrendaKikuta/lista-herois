import { Component } from '@angular/core';

import { HeroesService } from '../../heroes/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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

  onKeyUp(target: any = '') {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.filter = elemento.value;
    }
  }
}