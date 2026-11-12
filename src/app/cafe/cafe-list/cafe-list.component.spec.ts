import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CafeListComponent } from './cafe-list.component';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;

  const cafes: Cafe[] = [
    new Cafe(1, 'Café Especial para tí', 'Blend', 'Angelópolis, Antioquia', 'Panela, Durazno, Caramelo', 1920, ''),
    new Cafe(2, 'Café Especial Navegante', 'Café de Origen', 'Guatapé, Antioquia', 'Cítrico, Naranja, Cacao', 1800, ''),
    new Cafe(3, 'Café Especial El Prístino', 'Blend', 'Chinchiná, Caldas', 'Chocolate negro, Caramelo', 1700, '')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeListComponent],
      providers: [
        { provide: CafeService, useValue: { getCafes: () => of(cafes) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the table with 3 rows plus the header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('thead tr').length).toEqual(1);
    expect(compiled.querySelectorAll('tbody tr').length).toEqual(3);
  });

  it('should show the name of each cafe in its row', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const filas = compiled.querySelectorAll('tbody tr');
    filas.forEach((fila, i) => {
      expect(fila.textContent).toContain(cafes[i].nombre);
    });
  });
});
