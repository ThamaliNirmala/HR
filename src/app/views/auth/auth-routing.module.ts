import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  { 
    path: '', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'reset-password', component: ResetpasswordComponent},
      {path: 'forgot-password', component: ForgotpasswordComponent}
    ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
