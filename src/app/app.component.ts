import { Component } from '@angular/core';
import { Keg } from './models/product.model';
import { Customer } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedUser = null;
  currentKeg = null;
  allUsers: Customer[] = [];

  kegs: Keg[] = [
    new Keg("IPA", "pHreim", 6, .065, 124),
    new Keg("Pilsner", "Bouy", 5, .045, 240),
    new Keg("Hefeweizen", "Widmer", 5.5, .05, 300)
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

  displayKeg(keg){
    this.currentKeg = keg;
  }
}
