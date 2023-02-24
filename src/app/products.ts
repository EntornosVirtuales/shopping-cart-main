export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  images:string [];
}

export const products = [
  {
    id: 1,
    name: 'Nintendo',
    price: 8000,
    description:
      'Cuenta con una pantalla OLED de 7 pulgadas (17.78 cm) que muestra vibrantes colores. Más información. Nintendo Switch. Totalmente equipada',
    stock: 10,
    images: ['Nintendo.jpg'],
  },
  {
    id: 2,
    name: 'X-Box',
    price: 10000,
    description:
      'La consola Xbox Series S, totalmente digital, ofrece juegos de próxima generación a un precio accesible. Experimenta la velocidad y el rendimiento',
    stock: 12,
    images: ['Xbox.jpg'],
  },
  {
    id: 3,
    name: 'Samsung Galaxy',
    price: 5000,
    description:
      'Explora la línea completa de Galaxy Serie A y descubre nuestros celulares potentes y económicos. ¡Aprovecha las ofertas y encuentra el modelo ideal para ti!',
    stock: 30,
    images: ['Samsung.jpg'],
  },
  {
    id: 4,
    name: 'OPPO',
    price: 6000,
    description:
      'OPPO, fabricantes lideres e innovadores de dispositivos inteligentes del mundo, elevando la vida a través del arte tecnológico',
    stock: 30,
    images: ['OPPO.jpg'],
  },
  {
    id: 5,
    name: 'Motorola',
    price: 6000,
    description:
      'El moto g60 incluye un sistema de cámaras de ultra alta resolución con 108 MP, usa el teléfono por más tiempo; Dura hasta 54 horas con una sola carga.',
    stock: 30,
    images: ['Motorola.jpg'],
  },


];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
