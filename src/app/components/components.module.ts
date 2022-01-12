import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseModule } from './base/base.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    BaseModule,
    HeroesModule
  ],
  exports: [
    BaseModule,
    HeroesModule  
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
