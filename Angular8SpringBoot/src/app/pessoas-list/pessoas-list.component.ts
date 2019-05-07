import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css']
})
export class PessoasListComponent implements OnInit {

  pessoas: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.reloadData();
  }

  deletePessoas() {
    this.pessoaService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.pessoas = this.pessoaService.getPessoasList();
    console.log(this.pessoas);
  }
}
