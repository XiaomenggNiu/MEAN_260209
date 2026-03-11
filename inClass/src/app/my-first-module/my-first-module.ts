import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from '../my-first-component/my-first-component';



@NgModule({
  declarations: [MyFirstComponent],
  imports: [
    CommonModule
  ],
  exports:[MyFirstComponent],
  providers:[]
})
export class MyFirstModule { }
