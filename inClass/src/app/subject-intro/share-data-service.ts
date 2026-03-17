import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  localSub = new Subject<number>();

  emitData(num: number){
    this.localSub.next(num);
  }
}
