import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchShowComponent } from './search-show/search-show.component';
import { LoginComponent } from './login/login.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; 
import {HttpClientModule } from '@angular/common/http';
import { UserShowListComponent } from './user-show-list/user-show-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchShowComponent,
    LoginComponent,
    UserShowListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
