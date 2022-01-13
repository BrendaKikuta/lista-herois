import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroCardComponent } from './hero-card/hero-card.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';


@NgModule({
  declarations: [
    HeroCardComponent,
    ListHeroesComponent,
  ],
  exports: [
    HeroCardComponent,  
    ListHeroesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class HeroesModule { }
