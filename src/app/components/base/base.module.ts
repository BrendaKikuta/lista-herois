import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    FooterComponent,  
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class BaseModule { }
