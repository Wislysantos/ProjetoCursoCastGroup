import { ToastrService } from 'ngx-toastr';
import { CadastroCursoService } from './../shared/cadastro-curso.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CadastroCurso } from '../shared/cadastro-curso';



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
    if (this.cadastro.formData.cursoID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
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
  
  ver(n: string, q: number, di: string, dt: string, des: string){
    console.log(n);
    console.log(q);
    console.log(di);
    console.log(dt);
    console.log(des);
    console.log();
    
     
  }

}


