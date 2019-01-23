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
  selectedUser = null;
  currentProduct = null;
  allUsers: Customer[] = [];

  products: Product[] = [
    new Product("Apples", 1.50, 0),
    new Product("Bananas", 0.50, 0),
    new Product("Oranges", 2.00, 0)
  ]

  // user = new Customer("Tanvi", []);

  createUser(name, password){
    this.allUsers.push(new Customer(name, password, []));
    console.log(this.allUsers)
  }

  loginUser(name, password){
    console.log(name);
    console.log(password);
    for(let user of this.allUsers){
      if(user.userName.includes(name) && user.userPassword.includes(password)){
        this.selectedUser = user;
      }
    }
  }

  displayProduct(product){
    this.currentProduct = product;
  }
}
