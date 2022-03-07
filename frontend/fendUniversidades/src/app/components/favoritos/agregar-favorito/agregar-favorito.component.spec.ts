import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFavoritoComponent } from './agregar-favorito.component';

describe('AgregarFavoritoComponent', () => {
  let component: AgregarFavoritoComponent;
  let fixture: ComponentFixture<AgregarFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFavoritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
