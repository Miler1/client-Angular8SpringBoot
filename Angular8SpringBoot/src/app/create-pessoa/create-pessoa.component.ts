import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.css']
})
export class CreatePessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  submitted = false;
  estados = [];

  angForm: FormGroup;

  constructor(private pessoaService: PessoaService, private fb: FormBuilder) { 
    this.createForm();
  }
    
  ngOnInit(){
  }

  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       cpf: ['', Validators.required ],
       uf: ['', Validators.required ]
    });
  }

  newPessoa(): void {
    this.submitted = false;
    this.pessoa = new Pessoa();
  }

  onTestGet() {
     this.pessoaService.getUf()
     .subscribe(
        //data => this.getData = JSON.stringify(data),
        data => {
          console.log(data);
          //this.submitted = true;
          this.estados = data;
        },
        error => alert(error),
        () => console.log("acesso a webapi get ok...")
     );
   }

  save() {
    this.pessoaService.createPessoa(this.pessoa)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.pessoa = new Pessoa();
  }

  onSubmit() {
    this.save();
  }

}
