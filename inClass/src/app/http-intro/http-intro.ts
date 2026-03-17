import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DemoDataService, Todo } from './demo-data-service';
import { from, fromEvent, interval, map, Observable, of, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-http-intro',
  standalone: false,
  templateUrl: './http-intro.html',
  styleUrl: './http-intro.scss',
})
export class HttpIntro implements OnDestroy, OnInit, AfterViewInit{
  sub: Subscription[] = [];
  todoList: Todo[] =[];
  todoObs: Observable<any> | undefined;
  loading: boolean = true;

  // obsFromOperators = interval(1000);
  //  documet.getElementby/querySelector
  @ViewChild('btn') btn: ElementRef | undefined;
  // obsFromOperators = fromEvent(this.btn.nativeElement,);
  constructor(private dataService: DemoDataService){
    this.todoObs = this.dataService.getSampleData();
  }
  getTodos(){
    this.sub.push(this.dataService.getSampleData().subscribe((val: Todo[])=>{
      this.todoList = val;
      this.loading = false;
      console.log(this.todoList);
    }));
  }

  ngOnInit(): void {
    // of([1, 2, 3]).subscribe(val=>console.log(val))
    // from([1, 2, 3]).subscribe(val=>console.log(val))
    // this.obsFromOperators.pipe(map(x=>10*x), take(10)).subscribe(val=>console.log(val))
    this.sub.push(this.dataService.localObs.subscribe(
      (val)=>{console.log(val)}, 
    (error)=>{console.log(error)}, 
    ()=>{console.log("completed")}))
  }

  ngOnDestroy(): void {
    if(this.sub.length){
      this.sub.forEach((s)=>s.unsubscribe());
    }
  }

  ngAfterViewInit(): void {
    const elem = this.btn?.nativeElement
    console.log(this.btn?.nativeElement);
    // fromEvent(elem,"click").subscribe((val)=>{console.log("button is clicked", val)})
    const clickObs = fromEvent(elem,"click");
    // this.obsFromOperators.pipe(takeUntil(clickObs)).subscribe(val=>console.log(val))
  }
}
