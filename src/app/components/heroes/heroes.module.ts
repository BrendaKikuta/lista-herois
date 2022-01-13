import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterByName } from './filter-by-name.pipe';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';


@NgModule({
  declarations: [
    HeroCardComponent,
    ListHeroesComponent,
    FilterByName
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
