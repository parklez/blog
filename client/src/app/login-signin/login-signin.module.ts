import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginSigninRoutingModule } from './login-signin-routing.module';
import { LoginHomeComponent } from './login-home/login-home.component';


@NgModule({
  declarations: [
    LoginHomeComponent
  ],
  imports: [
    CommonModule,
    LoginSigninRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginSigninModule { }
