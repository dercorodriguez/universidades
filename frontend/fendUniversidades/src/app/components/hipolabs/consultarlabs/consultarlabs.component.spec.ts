import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarlabsComponent } from './consultarlabs.component';

describe('ConsultarlabsComponent', () => {
  let component: ConsultarlabsComponent;
  let fixture: ComponentFixture<ConsultarlabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarlabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
