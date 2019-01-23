import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { Customer } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  products: Product[] = [
    new Product("Apples", 1.50),
    new Product("Bananas", 0.50),
    new Product("Oranges", 2.00)
  ]

  customers: new Customer()
}
