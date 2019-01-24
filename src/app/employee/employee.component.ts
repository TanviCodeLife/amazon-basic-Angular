import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/product.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() childAllKegs: Keg[];
  @Output() clickSender = new EventEmitter();

  showEditForm(kegToEdit: Keg){
    //this.currentKeg = null;
    //this.currentEdit = keg;
    this.clickSender.emit(kegToEdit);
  }

  }
