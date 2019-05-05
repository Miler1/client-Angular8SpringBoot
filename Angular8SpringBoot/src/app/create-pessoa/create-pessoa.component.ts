import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.css']
})
export class CreatePessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  submitted = false;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
  }

  newPessoa(): void {
    this.submitted = false;
    this.pessoa = new Pessoa();
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
