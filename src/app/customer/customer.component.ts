import { Component, Input } from '@angular/core';
import { Keg } from '../models/product.model';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  @Input() childAllKegs: Keg[];

  constructor() { }



}
