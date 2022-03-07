import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFavoritoComponent } from './consultar-favorito.component';

describe('ConsultarFavoritoComponent', () => {
  let component: ConsultarFavoritoComponent;
  let fixture: ComponentFixture<ConsultarFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarFavoritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
