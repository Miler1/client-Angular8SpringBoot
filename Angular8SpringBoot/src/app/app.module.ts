import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { NgbModal, NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
//import { DataTablesModule } from "angular-datatables";
import { HereMapComponent } from './here-map/here-map.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    PessoasListComponent,
    HereMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    //DataTablesModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [{
    provide: NgbDateAdapter,
    useClass: NgbDateNativeAdapter
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
