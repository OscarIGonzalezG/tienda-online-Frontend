import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Producto {
  id: number;
  nombre: string;
  tipo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  destacado: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'assets/data/products.json';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  getDestacados(): Observable<Producto[]> {
    return this.getProductos().pipe(
      map(productos => productos.filter(p => p.destacado))
    );
  }
}
