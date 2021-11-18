import { CadastroCursoViewComponent } from './cadastro-curso-view/cadastro-curso-view.component';
import { CadastroCursoComponent } from './cadastro-curso/cadastro-curso.component';
import { LoginComponent } from "./login/login.component"

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastro-curso', component: CadastroCursoComponent},
  {path: 'cadastro-curso-view', component: CadastroCursoViewComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
