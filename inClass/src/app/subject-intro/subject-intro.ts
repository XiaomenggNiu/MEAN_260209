import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../http-intro/demo-data-service';
import { ShareDataService } from './share-data-service';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-intro',
  standalone: false,
  templateUrl: './subject-intro.html',
  styleUrl: './subject-intro.scss',
})
export class SubjectIntro implements OnInit{
  count = 0;

  // sub = new Subject();
  // sub = new BehaviorSubject(20);
  sub = new ReplaySubject(1);
  constructor(private dataService: ShareDataService){}

  ngOnInit(): void {
    // this.dataService.localObs.subscribe((res)=>{
    //   console.log(res);
    // })
    this.dataService.localSub.subscribe((data)=>{
      console.log("in First Component, ", data)
    })
    this.sub.next(0);
    this.sub.subscribe((val)=>{console.log("subscriber 1", val)});
    this.sub.next(1);
    this.sub.next(2);
    this.sub.next(3);
    // this.sub.complete();
    this.sub.subscribe((val)=>{console.log("subscriber 2", val)});
    this.sub.next(4);
    this.sub.next(5);
    this.sub.subscribe((val)=>{console.log("subscriber 3", val)});
  }

  onClick(){
    this.count++;
    this.dataService.emitData(this.count);
  }
}
