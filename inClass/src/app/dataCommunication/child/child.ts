import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() fromParent ='';
  @Output() toParent = new EventEmitter();
  msg = 'message from child';
  onClick(){
    this.toParent.emit(this.msg)
  }
}
