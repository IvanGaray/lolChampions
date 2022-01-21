import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'detail/:id', component: HeroesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
