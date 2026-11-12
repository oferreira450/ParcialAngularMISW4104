import { Component, inject, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  standalone: false,
  templateUrl: './cafe-list.component.html',
  styleUrl: './cafe-list.component.css'
})
export class CafeListComponent implements OnInit {
  private cafeService = inject(CafeService);

  cafes: Cafe[] = [];
  totalOrigen = 0;
  totalBlend = 0;

  ngOnInit(): void {
    this.getCafes();
  }

  getCafes(): void {
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
      this.contarPorTipo();
    });
  }

  contarPorTipo(): void {
    this.totalOrigen = this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
    this.totalBlend = this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
  }
}
