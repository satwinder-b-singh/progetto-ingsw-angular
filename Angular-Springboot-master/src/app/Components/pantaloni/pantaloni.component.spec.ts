import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantaloniComponent } from './pantaloni.component';

describe('PantaloniComponent', () => {
  let component: PantaloniComponent;
  let fixture: ComponentFixture<PantaloniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantaloniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantaloniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
