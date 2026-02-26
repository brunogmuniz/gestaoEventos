import { Routes } from '@angular/router';
import {Login} from './login/login';
import {ModuloLeader} from './modulo-leader/modulo-leader';
import {AuthGuard} from './app-core/guards/auth-guard';
import {ModuloCommon} from './modulo-common/modulo-common';
import {ModuloAdmin} from './modulo-admin/modulo-admin';

export const routes: Routes = [
  {path: 'login', component: Login},

  {
    path: 'home-leader',
    component: ModuloLeader,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: ModuloCommon,
    canActivate: [AuthGuard]
  },
  {
    path: 'home-admin',
    component: ModuloAdmin,
    canActivate: [AuthGuard]
  }
];
