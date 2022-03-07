import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaruniversidadComponent } from './agregaruniversidad.component';

describe('AgregaruniversidadComponent', () => {
  let component: AgregaruniversidadComponent;
  let fixture: ComponentFixture<AgregaruniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaruniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaruniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
