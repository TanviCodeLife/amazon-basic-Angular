import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SellComponent } from './sell/sell.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    AddComponent,
    EditComponent,
    SellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
