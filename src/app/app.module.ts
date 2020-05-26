import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoggingComponent } from './logging/logging.component';
import { RegisterComponent } from './register/register.component';
import { MyadvertsComponent } from './myadverts/myadverts.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoggingComponent,
    RegisterComponent,
    MyadvertsComponent,
    AddComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularWebStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
