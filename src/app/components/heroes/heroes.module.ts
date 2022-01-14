import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroCardComponent } from './hero-card/hero-card.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { PaginationComponent } from './list-heroes/pagination/pagination.component';


@NgModule({
  declarations: [
    HeroCardComponent,
    ListHeroesComponent,
    PaginationComponent
  ],
  exports: [
    HeroCardComponent,  
    ListHeroesComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class HeroesModule { }
