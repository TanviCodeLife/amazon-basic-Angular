import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/product.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Output() doneAdding = new EventEmitter();
  constructor() { }

  createKeg(kegName, brand, price, alchoholContent, quantity){
    let newKeg: Keg= new Keg(kegName, brand, parseInt(price), parseInt(alchoholContent), parseInt(quantity));
    this.doneAdding.emit(newKeg);
  }

}
