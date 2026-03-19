import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { MyFirstComponent } from './my-first-component/my-first-component';
import { DirectivesIntro } from './directives-intro/directives-intro';
import { FormsIntroComponent } from './forms-intro-component/forms-intro-component';
import { RoutingIntro } from './routing-intro/routing-intro';
import { authGuard } from './routing-intro/auth-guard';
import { fethDataResolver } from './feth-data-resolver';

//  Define the routes of the application
const routes: Routes = [
  {path:'home', component: App},
  {path:'form-intro', component: FormsIntroComponent},
  // lazyload a standalone components
 {path: 'directive', loadComponent:
  ()=>import('./directives-intro/directives-intro').then((c)=>c.DirectivesIntro)
 },
//  lazy load a module
{path:'lazy', loadChildren:()=>
  import('./my-first-module/my-first-module').then((m)=> m.MyFirstModule)},
  // localhost: 4200/products
  // {path:'products', loadChildren()}

  {path:'products/:id', component: RoutingIntro, 
    canActivate: [authGuard],
    resolve:[fethDataResolver]
  }
];

@NgModule({
  // forRoot / forChild
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
