import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ManageRoomsComponent } from './admin/manage-rooms/manage-rooms.component';
import { RoomlistComponent } from './customer/roomlist/roomlist.component';
import { HistoryComponent } from './customer/history/history';

export const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },

  { path: 'admin', component: ManageRoomsComponent },
  { path: 'customer', component: RoomlistComponent },
  { path: 'customer/history', component: HistoryComponent },

  { path: '', redirectTo: 'auth/register', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/register' }
];
