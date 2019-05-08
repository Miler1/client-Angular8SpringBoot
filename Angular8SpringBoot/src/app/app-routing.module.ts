import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
  { path: 'pessoa', component: PessoasListComponent },
  { path: 'addpessoa', component: CreatePessoaComponent },
  { path: 'findbyid', component: PessoaSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
