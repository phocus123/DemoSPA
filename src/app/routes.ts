import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MessageComponent } from './components/message/message.component';
import { ListComponent } from './components/list/list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent },
      { path: 'messages', component: MessageComponent },
      { path: 'lists', component: ListComponent }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
