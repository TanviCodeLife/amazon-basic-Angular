import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() childAllKegs: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() sellPintSender = new EventEmitter();

  showEditForm(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }

  sellPint(keg) {
    this.sellPintSender.emit(keg);
  }

  }
