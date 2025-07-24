//app.routes.ts
/**
 * Este archivo define las rutas principales de la aplicaión.
 * Cada ruta carga un componente standalone cuando el usaurio aceede a una URL especifica.
 */
import { Routes } from '@angular/router';

// Importamos los componentes que hemos generado.
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent, //ruta raíz: http://localhost:4200/
    },
    {
        path: 'productos',
        component: ProductosComponent, // http://localhost:4200/productos
    },
    {
        path: 'contacto',
        component: ContactoComponent, // http://localhost:4200/contacto
    }
];
