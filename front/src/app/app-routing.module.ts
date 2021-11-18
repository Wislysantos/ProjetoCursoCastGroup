import { CadastroCursoViewComponent } from './cadastro-curso-view/cadastro-curso-view.component';
import { CadastroCursoComponent } from './cadastro-curso/cadastro-curso.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CadastroCursoViewComponent},
  {path: 'cadastro-curso', component: CadastroCursoComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
