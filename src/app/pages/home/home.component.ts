import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Producto } from '../../core/services/product.service';
import { HeroComponent } from '../../shared/hero/hero.component';
import { CardProductoComponent } from '../../shared/card-producto/card-producto.component';
import { ProductSliderComponent } from "../../shared/product-slider/product-slider.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CommonModule, ProductSliderComponent],
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  productosDestacados: Producto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getDestacados().subscribe(data => {
      this.productosDestacados = data;
    })
  }
}
