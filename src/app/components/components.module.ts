import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
