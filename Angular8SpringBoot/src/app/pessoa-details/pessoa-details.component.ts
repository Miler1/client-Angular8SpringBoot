import { Component, OnInit, Input } from '@angular/core';

import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { PessoasListComponent } from '../pessoas-list/pessoas-list.component';

@Component({
  selector: 'app-pessoa-details',
  templateUrl: './pessoa-details.component.html',
  styleUrls: ['./pessoa-details.component.css']
})
export class PessoaDetailsComponent implements OnInit {

  @Input() pessoa: Pessoa;

  constructor(private pessoaService: PessoaService, private listComponent: PessoasListComponent) { }

  ngOnInit() {
  }

  updatePessoa() {
    this.pessoaService.updatePessoa(this.pessoa.id,
      { nome: this.pessoa.nome, cpf: this.pessoa.cpf, 
          dataNascimento: this.pessoa.dataNascimento, peso: this.pessoa.peso, uf: this.pessoa.uf })
      .subscribe(
        data => {
          console.log(data);
          this.pessoa = data as Pessoa;
        },
        error => console.log(error));
  }

  deletePessoa() {
    this.pessoaService.deletePessoa(this.pessoa.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
