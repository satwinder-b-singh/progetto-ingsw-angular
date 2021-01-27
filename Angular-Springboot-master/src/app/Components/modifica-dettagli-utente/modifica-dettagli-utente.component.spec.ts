import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaDettagliUtenteComponent } from './modifica-dettagli-utente.component';

describe('ModificaDettagliUtenteComponent', () => {
  let component: ModificaDettagliUtenteComponent;
  let fixture: ComponentFixture<ModificaDettagliUtenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaDettagliUtenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaDettagliUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
