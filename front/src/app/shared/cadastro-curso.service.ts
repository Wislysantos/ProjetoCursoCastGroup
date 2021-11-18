import { CadastroCurso } from './cadastro-curso';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CadastroCursoService {


  readonly baseURL = 'https://localhost:5001/api/Cursoes'
  readonly baseURLCategoria = 'https://localhost:5001/api/Categorias'
  readonly baseURLPesquisar = 'https://localhost:5001/pesquisar'
  formData: CadastroCurso= new CadastroCurso();
  list!: CadastroCurso[];
  listaCategoria!: any[];

  constructor(private http: HttpClient, private router: Router) { }




  postCasCurso(){
    return this.http.post(this.baseURL, this.formData)
  }

  putCasCurso(){
    return this.http.put(`${this.baseURL}/${this.formData.cursoID}`, this.formData);
  }

  deleteCasCurso(id :number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res =>this.list = res as CadastroCurso[]);
  }

  getCasCurso(id: number){
    return this.http.get(`${this.baseURL}/${id}`)
  }

  getCategoria(){
    return this.http.get(`${this.baseURLCategoria}`).subscribe(
      resposta => {
        this.listaCategoria = resposta as any
        console.log(this.listaCategoria)
      },
      err => { console.log(err); }
    );
  }

  getPesquisar(pesquisar: string){
    return this.http.get(`${this.baseURLPesquisar}/${pesquisar}`)
  }



}
