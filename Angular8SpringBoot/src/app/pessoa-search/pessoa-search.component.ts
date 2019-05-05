import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-search',
  templateUrl: './pessoa-search.component.html',
  styleUrls: ['./pessoa-search.component.css']
})
export class PessoaSearchComponent implements OnInit {
  
  age: number;
  pessoas: Pessoa[];

  constructor(private dataService: PessoaService) { }

   ngOnInit() {
    this.age = 0;
  }

  private searchPessoas() {
    this.pessoas = [];
    this.dataService.getPessoaByid(this.age)
      .subscribe(pessoas => this.pessoas = pessoas);
  }

  onSubmit() {
    this.searchPessoas();
  }


}
