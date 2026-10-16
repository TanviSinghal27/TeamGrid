import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { About } from './components/about/about';
import { Dashboard } from './components/dashboard/dashboard';
import { Departments } from './components/department/department';
import { Employees } from './components/employees/employees';
import { NotFound } from './components/not-found/not-found';
import { SignUp } from './components/sign-up/sign-up';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'about', component: About, canActivate: [authGuard] },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'department', component: Departments, canActivate: [authGuard] },
  { path: 'employees', component: Employees, canActivate: [authGuard] },
  { path: 'signUp', component: SignUp },
  { path: '**', component: NotFound },
];
