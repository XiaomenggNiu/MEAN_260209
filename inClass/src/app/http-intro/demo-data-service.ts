import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Todo{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class DemoDataService {
  private url: string = 'https://jsonplaceholder.typicode.com/todos';
  localObs: Observable<number> = new Observable((observer)=>{
    // observer: who subscribe to this obeservable
    console.log('Start')
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.error("Error here");
    observer.complete();
    observer.next(4);
   
  })
  
  // 0. Import the HttpClientModule in RootModule
  // 1. Inject the HttpClient Service
  constructor(private http: HttpClient){
  }
  // 2. A method to make http request
  getSampleData(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url);
  }
}
