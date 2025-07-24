# 🛠️ Tienda Online Vintage - Angular 19 + Tailwind

Proyecto personal desarrollado como parte de mi portafolio, con el objetivo de reforzar mi stack frontend basado en **Angular 19** y **Tailwind CSS**, aplicando buenas prácticas, diseño responsivo y lógica personalizada sin librerías externas.

## 🎯 Objetivo

Crear una **vitrina de productos online** con estética vintage, adaptada para desktop y móvil, que funcione de manera visual y profesional. El proyecto representa una **tienda de repuestos automotrices** y se está construyendo completamente desde cero.

## ⚙️ Tecnologías

- **Framework**: Angular 19 (componentes standalone)
- **Estilos**: Tailwind CSS (tema vintage personalizado)
- **Mock de datos**: JSON local (`assets/data/products.json`)
- **Slider**: Implementación personalizada sin librerías externas

## 🧩 Estructura de Componentes

- `HeroComponent`: Cabecera introductoria
- `ProductSliderComponent`: Slider responsivo de productos destacados
- `CardProductoComponent`: Tarjeta de presentación de productos
- `FooterComponent`: Pie de página con estilo clásico
- `NavbarComponent`: Barra de navegación tipo taller mecánico vintage
- `HomeComponent`: Página principal con integración de componentes

## 🖼️ Diseño y Estilo

Inspiración en **talleres mecánicos antiguos** con:
- Paleta de colores vintage (`--vintage-rojo`, `--vintage-marco`, etc.)
- Tipografía retro
- Uso de `backdrop-blur`, sombras suaves, bordes redondeados
- Transiciones `hover` elegantes y efectos sutiles

## 🚀 Funcionalidades Implementadas

✅ Carga dinámica de productos desde un JSON  
✅ Slider adaptativo a móvil y desktop sin librerías externas  
✅ Transiciones y controles manuales (prev/next)  
✅ Autoscroll automático con pausa al pasar el mouse  
✅ Adaptación visual y funcional con Tailwind

## 🧪 Retos Enfrentados

Durante el desarrollo, me encontré con varios desafíos:

- 🌀 Dificultades al adaptar un **slider responsive desde cero**
- 📱 Problemas de visualización en móvil vs desktop
- ⚙️ Coordinación entre el `translateX`, el `slideWidth` y el número de tarjetas visibles
- 📐 Ajuste fino de medidas, márgenes y paddings sin romper el diseño

**Todos los problemas fueron documentados y solucionados progresivamente**, lo cual me permitió aprender muchísimo sobre renderizado angular, manejo de `ngStyle`, comunicación entre componentes y responsive design real.

## 📌 Pendiente

- Subida a mi portafolio web personal (en progreso)
- Página de producto individual
- Autenticación y carrito de compras (versión futura)

## 📁 Cómo usar este proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/OscarIGonzalezG/tienda-online-Frontend.git
   cd tienda-online-Frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la app:
   ```bash
   ng serve
   ```

4. Acceder en navegador:
   ```
   http://localhost:4200
   ```

## 👨‍💻 Autor

**Oscar [https://www.linkedin.com/in/oscar-ignacio-gonzalez-gonzalez-911369171/]**  
Desarrollador frontend en formación  
Especializado en Angular + Tailwind CSS  

---

> **Nota**: Este proyecto aún no está subido a GitHub ni portafolio, pero será publicado pronto como parte de mi proceso de mejora continua.

## 📬 Contacto

- [LinkedIn]([[https://www.linkedin.com/in/tuusuario](https://www.linkedin.com/in/oscar-ignacio-gonzalez-gonzalez-911369171/)](https://www.linkedin.com/in/oscar-ignacio-gonzalez-gonzalez-911369171/))
- [Email](mailto:ozkrgonzalez1201@gmail.com)

---

