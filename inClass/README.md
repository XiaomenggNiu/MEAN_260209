# Data Binding
1. One-way data binding: {{ variable }}, [property]="variable", (event)="function()"
2. Two-way binding: [(ngModel)]="variable", imports FormsModule
3. FormControl: new FormControl(),  [formControl]="formControlVariable", import ReactiveFormsModule


# Routing
1. destroy prev comp
2. Gurads check
3. resolve the data
4. start navigation
5. render the new comp

# Observable
1. rxjs library, receive/emit a stream of data
2. lazy, only starts to emit when it's subscribed (obs.subscribe)
3. can be stopped by unsubscribing from the Subscription
4. has more operators from rxjs: pure function
5. unnecessary to unsubscribe: When the obs stop on its own
6. Subject- Multicasting, sub.next out of constructor 
new BehaviorSubject(initialValue)
new ReplaySubject(bufferSize)
7. Async Pipe: subscribe to obs/sub from template

# Operators
1. Creation Operators: return an observable, fromEvent, of VS from, interval().subscribe(), forkJoin(=promise.all) VS combineLatest
2. Pipeable Operators: sourceObs.pipe().subscribe(), debounceTime VS throttleTime, sourceObs.switchMap(()=>return innerObs) VS concatMap VS mergeMap, map()
3. filter(()=>{condition}), take(num) VS takeUntil(innerObs)
4. delay(1000), tap()
5. share(), sub.asObservable()

# Advanced Routing
1. RouterEvents
2. Lazy Loading
3. Route Parameters :
4. Query Parameters ?
5. Activated Route
6. Route Guards
7. Resolver

# ng-container, ng-template
1. ng-container: Group elements
2. ng-template
3. ng-content: content projection (parent -> child, html)

# change Detection
1. default: event, data update, observable emits
2. onpush: user events, @Input