import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroesModule } from '../heroes/heroes.module';
import { HomeComponent } from './home/home.component';
import { FilterByName } from '../heroes/filter-by-name.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FilterByName
  ],
  exports: [
    FooterComponent,  
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: []
})
export class BaseModule { }
