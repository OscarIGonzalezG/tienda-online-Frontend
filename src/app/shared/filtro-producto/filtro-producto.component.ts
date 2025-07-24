import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtro-producto.component.html',
  styleUrl: './filtro-producto.component.css'
})
export class FiltroProductoComponent {
  @Output() ordenCambio = new EventEmitter<string>();
  @Output() busquedaCambio = new EventEmitter<string>();
  @Output() limpiarCambio = new EventEmitter<void>();
  @Output() cambioCambio = new EventEmitter<number>();

  ordenSeleccionado: string = 'precioAsc';
  terminoBusqueda: string = '';
  cantidad: number = 0;

  opcionesCantidad: number[] = [5, 10, 15, 20, 25, 0]; // 0 = todos

  emitirOrden() {
    this.ordenCambio.emit(this.ordenSeleccionado);
  }

  emitirBusqueda() {
    this.busquedaCambio.emit(this.terminoBusqueda.trim());
  }

  limpiar(){
    this.ordenSeleccionado = 'precioAsc';
    this.terminoBusqueda = '';
    this.cantidad = 0;
    this.limpiarCambio.emit();
  }

  emitirCambio() {
    this.cambioCambio.emit(this.cantidad);
  }
  
}
