import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamicieComponent } from './camicie.component';

describe('CamicieComponent', () => {
  let component: CamicieComponent;
  let fixture: ComponentFixture<CamicieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamicieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamicieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
