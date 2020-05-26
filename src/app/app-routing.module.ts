import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggingComponent } from './logging/logging.component';
import { RegisterComponent } from './register/register.component';
import { MyadvertsComponent } from './myadverts/myadverts.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'logging', component: LoggingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myadverts', component: MyadvertsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
