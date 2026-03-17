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

@NgModule({
  declarations: [
    App,
    DirectivesIntro,
    Highlight,
    PipeIntro,
    MyFirstPipe,
    Parent,
    Child,
    FormsIntroComponent,
    HttpIntro,
    SubjectIntro,
    SecondComponent,
    // Lifecycle,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MyFirstModule,
    HttpClientModule 
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
