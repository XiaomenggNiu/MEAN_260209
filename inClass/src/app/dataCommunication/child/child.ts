import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from, interval } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child implements DoCheck, OnInit{
  @Input() fromParent!:{name: string};
  @Output() toParent = new EventEmitter();
  msg = 'message from child';
  count: number = 0;
  // obs = interval(1000);
  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    from([1, 2,3]).subscribe((v)=>{
      console.log(v);
      this.count = v
      // this.cdr.detectChanges();
    });
  }
  ngDoCheck(): void {
    // contentChecked/ viewChecked
    console.log("in do check")
  }
  onClick(){
    this.toParent.emit(this.msg)
  }
}
