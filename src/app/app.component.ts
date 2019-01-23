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
  //kegEditForm = false;
  currentEdit = null;
  allKegs: Keg[] = [
    new Keg("IPA", "pHreim", 6, .065, 124),
    new Keg("Pilsner", "Bouy", 5, .045, 240),
    new Keg("Hefeweizen", "Widmer", 5.5, .05, 300)
  ];


  createKeg(kegName, brand, price, alchoholContent, quantity){
    this.allKegs.push(new Keg(kegName, brand, price, alchoholContent, quantity));
    this.kegForm = false;
  }

  editKeg(addQuantity){
    console.log(addQuantity);
    this.currentEdit.quantity += addQuantity;
  }

  displayKeg(keg){
    this.currentEdit = null;
    this.currentKeg = keg;
  }

  showKegForm(){
    this.kegForm = true;
  }

  hideKegForm(){
    this.kegForm = false;
  }

  showEditForm(keg){
    this.currentKeg = null;
    //this.kegEditForm = true;
    this.currentEdit = keg;
  }
}
