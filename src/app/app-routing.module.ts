import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggingComponent } from './logging/logging.component';
import { RegisterComponent } from './register/register.component';
import { MyadvertsComponent } from './myadverts/myadverts.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'logging', component: LoggingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myadverts', component: MyadvertsComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent},
  { path: 'search', component: SearchComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
