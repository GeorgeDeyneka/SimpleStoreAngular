import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    surname: '',
    address: '',
    phone: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    let message: string = `Dear ${this.checkoutForm.value.name} ${this.checkoutForm.value.surname}, your order has been submitted.`;
    console.log(message)
    this.checkoutForm.reset();
  }

  ngOnInit(): void {}
}
