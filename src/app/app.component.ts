import { Component } from '@angular/core';
import { Keg } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taproom';
  selectedUser = null;
  currentKeg = null;
  kegForm = false;
  currentEdit = null;
  masterAllKegs: Keg[] = [
    new Keg("IPA", "pHreim", 6, .065, 5),
    new Keg("Pilsner", "Bouy", 5, .045, 240),
    new Keg("Hefeweizen", "Widmer", 5.5, .05, 300),
    new Keg("Another", "Another", 5.5, .05, 0),
    new Keg("Another2", "Another2", 5.5, .05, 0),
  ];


  createKeg(newKeg: Keg){
    this.masterAllKegs.push(newKeg);
    this.kegForm = false;
  }

  finishedEditing(){
    this.currentEdit = null;
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
    this.currentEdit = keg;
  }

  sellPint(keg: Keg) {
    (keg.quantity > 0) ? keg.quantity-- : keg.message="out of beer";
  }

}
