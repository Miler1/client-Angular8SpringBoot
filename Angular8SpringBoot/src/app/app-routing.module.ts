import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'findbyage', component: SearchCustomersComponent },
  { path: 'pessoa', component: PessoasListComponent },
  { path: 'addpessoa', component: CreatePessoaComponent },
  { path: 'findbyid', component: PessoaSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
