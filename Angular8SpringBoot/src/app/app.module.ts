import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { PessoaDetailsComponent } from './pessoa-details/pessoa-details.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';
import { NgbModal, NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    CreatePessoaComponent,
    PessoaDetailsComponent,
    PessoasListComponent,
    PessoaSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule
  ],

  providers: [{
    provide: NgbDateAdapter,
    useClass: NgbDateNativeAdapter
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
