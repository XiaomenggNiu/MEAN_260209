import { Component } from '@angular/core';
import { TransferData } from '../dataCommunication/transfer-data';

@Component({
  selector: 'app-pipe-intro',
  standalone: false,
  templateUrl: './pipe-intro.html',
  styleUrl: './pipe-intro.scss',
})
export class PipeIntro {
  data = new Date()
  // dependency Injection
  constructor(private dataService: TransferData){
    console.log(this.data)
    console.log("Access Data from Service",this.dataService.serviceData)
  }

  update(){
    this.dataService.updateData = "new Data from pipe Intro";
    console.log(this.dataService.serviceData);
  }
}
