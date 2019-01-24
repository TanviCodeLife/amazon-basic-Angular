import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() childCurrentEdit: Keg;
  @Output() clickSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  finishedEditing(){
    this.clickSender.emit();
  }

}
