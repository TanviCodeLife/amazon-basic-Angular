import { Component } from '@angular/core';
import { Keg } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedUser = null;
  currentKeg = null;
  kegForm = false;
  allKegs: Keg[] = [
    new Keg("IPA", "pHreim", 6, .065, 124),
    new Keg("Pilsner", "Bouy", 5, .045, 240),
    new Keg("Hefeweizen", "Widmer", 5.5, .05, 300)
  ];


  // user = new Customer("Tanvi", []);

  createKeg(kegName, brand, price, alchoholContent, quantity){
    this.allKegs.push(new Keg(kegName, brand, price, alchoholContent, quantity));
  }

  // loginUser(name, password){
  //   console.log(name);
  //   console.log(password);
  //   for(let user of this.allUsers){
  //     if(user.userName.includes(name) && user.userPassword.includes(password)){
  //       this.selectedUser = user;
  //     }
  //   }
  // }

  displayKeg(keg){
    this.currentKeg = keg;
  }

  showKegForm(){
    this.kegForm = true;
  }

  hideKegForm(){
    this.kegForm = false;
  }
}
