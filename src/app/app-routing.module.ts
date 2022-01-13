import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/base/home/home.component';
import { ListHeroesResolver } from './components/heroes/list-heroes/list-heroes.resolve';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    resolve: {
      heroes: ListHeroesResolver
    }
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
