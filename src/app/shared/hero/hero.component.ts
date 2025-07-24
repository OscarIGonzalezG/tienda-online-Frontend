// hero.component.ts

/**
 * Sección visual que da la bienvenida al usuario y comunica el propósito de la tienda.
 * Puede incluir texto llamativo, boton CTA, e imagen decorativa.
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
