import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { AlertifyService } from './services/alertify.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, RegisterComponent],
  imports: [BrowserModule, HttpModule, FormsModule, BsDropdownModule.forRoot()],
  providers: [AuthService, AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
