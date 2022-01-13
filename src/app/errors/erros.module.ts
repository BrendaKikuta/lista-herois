import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseModule } from '../components/base/base.module';

import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  exports: [
    NotFoundComponent,  
  ],
  imports: [
    BaseModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ErrorsModule { }
