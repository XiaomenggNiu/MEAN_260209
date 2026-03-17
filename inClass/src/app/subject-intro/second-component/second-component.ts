import { Component } from '@angular/core';
import { ShareDataService } from '../share-data-service';

@Component({
  selector: 'app-second-component',
  standalone: false,
  templateUrl: './second-component.html',
  styleUrl: './second-component.scss',
})
export class SecondComponent {
  localVal: number | undefined;
  constructor(private dataService: ShareDataService){}
  
    ngOnInit(): void {
      // this.dataService.localObs.subscribe((res)=>{
      //   console.log(res);
      // })
      this.dataService.localSub.subscribe((data: number)=>{
        console.log("Second Component, ", data)
        this.localVal = data;
      })
    }
}
