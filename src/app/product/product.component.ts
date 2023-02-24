import { Component, Input  } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() producto!: Product;

  compartir() {
    window.alert('¡El producto ha sido compartido!');
  }
  onNotify() {
    window.alert('Se le notificará cuando el producto salga a la venta');
  }
  display: boolean = false;
	showDialog() {
        this.display = true;
      }

      constructor(
        private cartService: CartService
      ) { }
      AgregarCart(product: Product) {
        this.cartService.AgregarCart(product);
        window.alert('¡Tu producto ha sido agregado al carrito!');
        }

  }