import { ToastrService } from 'ngx-toastr';
import { CadastroCursoService } from './../shared/cadastro-curso.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CadastroCurso } from '../shared/cadastro-curso';
import { variable } from '@angular/compiler/src/output/output_ast';
import { invalid } from '@angular/compiler/src/render3/view/util';



@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent implements OnInit {


  constructor(public cadastro: CadastroCursoService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  dtHoje = new Date();


  onSubmit(form: NgForm) {

    console.log("valor formdata " );
    console.log(this.cadastro.formData);
    console.log(this.cadastro.formData.dtInicio > this.cadastro.formData.dtTermino);

    if(this.cadastro.formData.dtInicio > this.cadastro.formData.dtTermino){
      return alert("Data de inicio não pode ser maior do que Termino")
    }
    if(this.cadastro.formData.nomeCurso == "" || this.cadastro.formData.qtdAlunos == null || this.cadastro.formData.qtdAlunos == 0 || this.cadastro.formData.descricao == "" || this.cadastro.formData.dtInicio == "" || this.cadastro.formData.dtTermino == ""){
      return alert("Por favor Preencha todos os campos")
     }

     if(this.cadastro.formData.cursoID == 0){
       this.insertRecord(form);
        return alert("Curso adicionado com sucesso!")
     }

      else
        this.updateRecord(form);

    /*this.cadastro.formData.dtInicio
    if (this.cadastro.formData.cursoID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);*/
  }

  insertRecord(form: NgForm) {
    this.cadastro.postCasCurso().subscribe(
      res => {
        this.resetForm(form);
        this.cadastro.refreshList();
        this.toastr.success('Enviado com sucesso', 'Registro de detalhes de pagamento')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.cadastro.putCasCurso().subscribe(
      res => {
        this.resetForm(form);
        this.cadastro.refreshList();
        this.toastr.info('Atualizado com sucesso', 'Registro de detalhes de pagamento')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.cadastro.formData = new CadastroCurso();
  }

  ver(n: any){
    console.log(n);
  }

}


