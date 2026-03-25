import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { from, fromEvent, interval, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App implements OnInit, AfterViewInit{
  showContent = true;
  @ViewChild('btn') myBtn: ElementRef | undefined;

  num = -1;
  
  ngOnInit(): void {
    console.log(this.myBtn)
  }
  ngAfterViewInit(){
    const clickObs = fromEvent(this.myBtn?.nativeElement, 'click')

    // because zonless
    interval(1000).pipe(
      takeUntil(clickObs)
    ).subscribe((val)=>{
      this.num = val;
      console.log(val);
    })
  }

}
