import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiubottiComponent } from './giubotti.component';

describe('GiubottiComponent', () => {
  let component: GiubottiComponent;
  let fixture: ComponentFixture<GiubottiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiubottiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiubottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
