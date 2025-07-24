import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../core/services/product.service';
import { CardProductoComponent } from '../card-producto/card-producto.component';


@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule, CardProductoComponent],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})

export class ProductSliderComponent implements AfterViewInit, OnDestroy {
  @Input() productos: Producto[] = [];
  @ViewChild('sliderContainer') sliderRef!: ElementRef<HTMLDivElement>;

  private scrollInterval: any;
  private scrollDirection: 'right' | 'left' = 'right';

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  startAutoScroll() {
    const container = this.sliderRef.nativeElement;

    this.scrollInterval = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollAmount = 2;

      if (this.scrollDirection === 'right') {
        container.scrollLeft += scrollAmount;
        if (container.scrollLeft >= maxScroll) {
          this.scrollDirection = 'left';
        }
      } else {
        container.scrollLeft -= scrollAmount;
        if (container.scrollLeft <= 0) {
          this.scrollDirection = 'right';
        }
      }
    }, 30);
  }

  pauseAutoScroll() {
    clearInterval(this.scrollInterval);
  }

  resumeAutoScroll() {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.pauseAutoScroll();
  }
}