import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
//import { Swal } from 'sweetalert2';

import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css']
})
export class PessoasListComponent implements OnInit {

  //dtOptions: DataTables.Settings = {};
  pessoa: Pessoa = new Pessoa();
  pessoas: Observable<Pessoa[]>;
  //@Input() pessoa: Pessoa;
  submitted = false;
  estados = [];
  closeResult: string;

  angForm: FormGroup;

  constructor(private pessoaService: PessoaService, private fb: FormBuilder, private modalService: NgbModal, private http: HttpClient) { 
    this.createForm();
  }

  ngOnInit() {
    this.reloadData();
    /*this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };*/
    this.pessoas = this.pessoaService.getPessoasList();
  }

  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       cpf: ['', Validators.required ],
       uf: ['', Validators.required ]
    });
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

  deletePessoa(id) {
    if (confirm('Deseja deletar este registro?')) {
      this.pessoaService.deletePessoa(id)
        .subscribe(
        data => {
          console.log(data);
          alert('Registro deletado com sucesso!');
          this.reloadData();
        },
        error => console.log(error));
    } else {
        // Do nothing!
    }
  }

  reloadData() {
    this.pessoas = this.pessoaService.getPessoasList();
    console.log(this.pessoas);
  }

  open(content, pessoa) {
      this.submitted = false;
      this.pessoa = pessoa;
      console.log(this.pessoa);
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  updatePessoa(pessoa) {
    console.log(pessoa.id);
    this.pessoa = pessoa;
    this.pessoaService.updatePessoa(this.pessoa.id,
      { nome: this.pessoa.nome, cpf: this.pessoa.cpf, 
          dataNascimento: this.pessoa.dataNascimento, peso: this.pessoa.peso, uf: this.pessoa.uf })
      .subscribe(
        data => {
          console.log(data);
          this.pessoa = data as Pessoa;
          this.submitted = true;
        },
        error => console.log(error));
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

   onSubmit(pessoa) {
    //this.save();
    console.log(pessoa)
    this.updatePessoa(pessoa);
    //this.reloadData();
  }

}
