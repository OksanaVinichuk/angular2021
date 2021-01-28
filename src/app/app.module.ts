import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersDataComponent } from './components/users-data/users-data.component';

import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/au/login/login.component';
import { PaswordComponent } from './components/au/pasword/pasword.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersDataComponent,
    UserComponent,
    LoginComponent,
    PaswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
