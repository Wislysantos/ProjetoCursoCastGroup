import { CadastroCurso } from './cadastro-curso';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CadastroCursoService {



  constructor(private http: HttpClient, private router: Router) { }

  readonly baseURL = 'https://localhost:5001/api/Cursoes'
  formData: CadastroCurso= new CadastroCurso();
  list!: CadastroCurso[];



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



}
