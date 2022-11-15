import { Component } from "@angular/core";
import { CartService } from "../cart.service";

import { Product, products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent {
  products = products;
  product: Product | undefined;

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    const amountUrl: number = Object.keys(product.imgUrl).length;
  }
}