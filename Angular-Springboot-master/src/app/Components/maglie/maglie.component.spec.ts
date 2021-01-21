import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaglieComponent } from './maglie.component';

describe('MaglieComponent', () => {
  let component: MaglieComponent;
  let fixture: ComponentFixture<MaglieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaglieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaglieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
