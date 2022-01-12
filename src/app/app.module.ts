import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BaseModule } from '../app/components/base/base.module';
import { ErrorsModule } from './errors/erros.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BaseModule,
    ErrorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
