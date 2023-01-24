import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
  Routes,
} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthGuard } from './user-authentication/auth.guard';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  {
    path: 'userDetails',
    component: UserTableComponent,
  },
  {
    path: 'register',
    component: RegisterUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
