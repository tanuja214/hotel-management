import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/register/register.component';
import { RoomListComponent } from './customer/roomlist/roomlist.component';
import { HistoryComponent } from './customer/history/history';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'rooms', component: RoomListComponent },
  { path: 'history', component: HistoryComponent }
];
