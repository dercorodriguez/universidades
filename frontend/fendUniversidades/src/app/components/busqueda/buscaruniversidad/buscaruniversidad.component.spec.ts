import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaruniversidadComponent } from './buscaruniversidad.component';

describe('BuscaruniversidadComponent', () => {
  let component: BuscaruniversidadComponent;
  let fixture: ComponentFixture<BuscaruniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaruniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaruniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
