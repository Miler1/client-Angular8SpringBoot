import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { HereMapComponent } from './here-map/here-map.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
  { path: 'pessoa', component: PessoasListComponent },
  { path: 'mapa', component: HereMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
