import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  title = '';
  closeResult: string;

  pessoas: Observable<Pessoa[]>;
  pessoa: Pessoa = new Pessoa();
  submitted = false;
  estados = [];

  angForm: FormGroup;

  constructor(private pessoaService: PessoaService, private fb: FormBuilder, private modalService: NgbModal) {
  	this.createForm();
  }

  ngOnInit(){
  	this.reloadData();
  }
  
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       cpf: ['', Validators.required ],
       uf: ['', Validators.required ]
    });
  }

  open(content) {
  	this.submitted = false;
  	this.pessoa = new Pessoa();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  abrirTabela() {
    /*$('#dtMaterialDesignExample').DataTable();
    $('#dtMaterialDesignExample_wrapper').find('label').each(function () {
    $(this).parent().append($(this).children());
    });
    $('#dtMaterialDesignExample_wrapper .dataTables_filter').find('input').each(function () {
    $('input').attr("placeholder", "Search");
    $('input').removeClass('form-control-sm');
    });
    $('#dtMaterialDesignExample_wrapper .dataTables_length').addClass('d-flex flex-row');
    $('#dtMaterialDesignExample_wrapper .dataTables_filter').addClass('md-form');
    $('#dtMaterialDesignExample_wrapper select').removeClass(
    'custom-select custom-select-sm form-control form-control-sm');
    $('#dtMaterialDesignExample_wrapper select').addClass('mdb-select');
    //$('#dtMaterialDesignExample_wrapper .mdb-select').materialSelect();
    $('#dtMaterialDesignExample_wrapper .dataTables_filter').find('label').remove();*/
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

  reloadData() {
    this.pessoas = this.pessoaService.getPessoasList();
    console.log(this.pessoas);
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
    this.reloadData();
  }

}
