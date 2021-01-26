import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnaComponent } from './donna.component';

describe('DonnaComponent', () => {
  let component: DonnaComponent;
  let fixture: ComponentFixture<DonnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
