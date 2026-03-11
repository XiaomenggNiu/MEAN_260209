import { Component } from '@angular/core';
import { TransferData } from '../transfer-data';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  msg = "Hello From Parent"
  msgFromChild: any;
  // dependency Injection
  constructor(private dataService: TransferData){
    console.log(this.dataService.serviceData);
  }

  fromChild(e: Event){
    console.log(e);
    this.msgFromChild = e;
  }
}
