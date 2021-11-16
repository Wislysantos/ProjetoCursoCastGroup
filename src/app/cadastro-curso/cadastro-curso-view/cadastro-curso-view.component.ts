import { DatePipe } from '@angular/common';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Pipe } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CadastroCurso } from 'src/app/shared/cadastro-curso';
import { CadastroCursoService } from 'src/app/shared/cadastro-curso.service';
import * as moment from 'moment';


@Component({
  selector: 'app-cadastro-curso-view',
  templateUrl: './cadastro-curso-view.component.html',
  styleUrls: ['./cadastro-curso-view.component.css']
})
export class CadastroCursoViewComponent implements OnInit { 
      
  
  constructor(public cadastro: CadastroCursoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cadastro.refreshList()
    console.log(this.cadastro.formData.dtInicio);
    
  }   
  
  dtHoje = new Date();
  

  alterar(selectedRecord: CadastroCurso) {
    this.cadastro.formData = Object.assign({}, selectedRecord);
  }

  ver1(id: number){
    this.cadastro.getCasCurso(id)
    console.log(this.cadastro.formData.dtInicio);
  }
  
  deletar(id: number,dataInicio: string) {
    let dt = new Date(dataInicio)
    



    console.log(dt.getTime() < this.dtHoje.getTime());
    console.log(dt.getTime());
    console.log(this.dtHoje.getTime());
    
    
    
    if(dt.getTime() < this.dtHoje.getTime()){
      alert("Este Curso não pode ser apagar")
    }else{ (confirm('Tem certeza que deseja deletar este registro?')) 
      this.cadastro.deleteCasCurso(id)
        .subscribe(
          res => {
            this.cadastro.refreshList();
            this.toastr.error("Excluído com sucesso", 'Registro de detalhes do curso');
          },
          err => { console.log(err) }
        )
    }
  }

}


