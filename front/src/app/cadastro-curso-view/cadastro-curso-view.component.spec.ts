import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCursoViewComponent } from './cadastro-curso-view.component';

describe('CadastroCursoViewComponent', () => {
  let component: CadastroCursoViewComponent;
  let fixture: ComponentFixture<CadastroCursoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCursoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCursoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
