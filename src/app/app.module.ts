import { AuthGuard } from './_guards/auth.guard';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { MessageComponent } from './components/message/message.component';
import { ListComponent } from './components/list/list.component';
import { MemberListComponent } from './components/member-list/member-list.component';

import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    MessageComponent,
    ListComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AlertifyService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
