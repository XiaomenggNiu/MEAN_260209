import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFirstModule } from './my-first-module/my-first-module';
import { DirectivesIntro } from './directives-intro/directives-intro';
import { Highlight } from './directives-intro/highlight';
import { PipeIntro } from './pipe-intro/pipe-intro';
import { MyFirstPipe } from './pipe-intro/my-first-pipe';
import { Parent } from './dataCommunication/parent/parent';
import { Child } from './dataCommunication/child/child';
import { Lifecycle } from './lifecycle/lifecycle';
import { FormsIntroComponent } from './forms-intro-component/forms-intro-component';
import { HttpIntro } from './http-intro/http-intro';
import { HttpClientModule } from '@angular/common/http';
import { SubjectIntro } from './subject-intro/subject-intro';
import { SecondComponent } from './subject-intro/second-component/second-component';
import { RoutingIntro } from './routing-intro/routing-intro';
import { CounterNgRx } from './counter-ng-rx/counter-ng-rx';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-ng-rx/Store/reducer';

@NgModule({
  declarations: [
    App,
    Highlight,
    PipeIntro,
    MyFirstPipe,
    Parent,
    Child,
    FormsIntroComponent,
    HttpIntro,
    SubjectIntro,
    SecondComponent,
    RoutingIntro,
    CounterNgRx,
    // Lifecycle,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MyFirstModule,
    HttpClientModule ,
    // Register all reducers
    // forFeature / forRoot 
    /*  Store {
      Counter: { count: number},
      User:{ orders:{}}
      ..
    } */
    StoreModule.forRoot({counter: counterReducer, 
      // user: userReducer
    })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
