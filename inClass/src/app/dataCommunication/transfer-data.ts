import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
  // The service is available across the Application
  // Singleton: Only 1 intance
})
export class TransferData {
  private sharedData = "Service Data";

  get serviceData(){
    return this.sharedData;
  }
  set updateData(str: string){
    this.sharedData = str;
    console.log("Data updated", this.sharedData)
  }

}
