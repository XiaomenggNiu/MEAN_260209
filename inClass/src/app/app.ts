import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { from, fromEvent, interval, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App implements OnInit, AfterViewInit{
  @ViewChild('btn') myBtn: ElementRef | undefined;
  
  ngOnInit(): void {
    console.log(this.myBtn)
  }
  ngAfterViewInit(){
    const clickObs = fromEvent(this.myBtn?.nativeElement, 'click')

    interval(1000).pipe(
      takeUntil(clickObs)
    ).subscribe((val)=>{
      console.log(val);
    })
  }

}
