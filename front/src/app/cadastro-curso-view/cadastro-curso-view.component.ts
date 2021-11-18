import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CadastroCurso } from 'src/app/shared/cadastro-curso';
import { CadastroCursoService } from 'src/app/shared/cadastro-curso.service';


@Component({
  selector: 'app-cadastro-curso-view',
  templateUrl: './cadastro-curso-view.component.html',
  styleUrls: ['./cadastro-curso-view.component.css']
})
export class CadastroCursoViewComponent implements OnInit {

  nomeCurso: string = ''
  dtHoje = new Date()
  constructor(public cadastro: CadastroCursoService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.cadastro.refreshList()
  }

  pesquisar() {
    console.log(this.nomeCurso)


    if (this.nomeCurso === '')
      return this.cadastro.refreshList()
    this.cadastro.getPesquisar(this.nomeCurso).subscribe(
      res => {
        this.cadastro.list = res as CadastroCurso[]
      },
      erro => {
        console.log(erro)
      })
  }

  alterar(selectedRecord: CadastroCurso) {
    
    this.cadastro.formData = Object.assign({}, selectedRecord);

  }

  ver1(id: number){
    this.cadastro.getCasCurso(id)
    console.log(this.cadastro.formData.dtInicio);
  }

  deletar(id: number,dataInicio: string) {
    let dtInicio = new Date(dataInicio)

    console.log(dtInicio < this.dtHoje);
    console.log(dtInicio.getTime());
    console.log(this.dtHoje.getTime());

    if(dataInicio )

    if(dtInicio < this.dtHoje){
      return alert("Este Curso não pode ser apagado")
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


