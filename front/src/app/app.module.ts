import { ToastrModule } from 'ngx-toastr';
import { CadastroCursoService } from './shared/cadastro-curso.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CadastroCursoComponent } from './cadastro-curso/cadastro-curso.component';
import { CadastroCursoViewComponent } from './cadastro-curso-view/cadastro-curso-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroCursoComponent,
    CadastroCursoViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
