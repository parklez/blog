import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterSignupRoutingModule } from './register-signup-routing.module';
import { SigninHomeComponent } from './signin-home/signin-home.component';


@NgModule({
  declarations: [
    SigninHomeComponent
  ],
  imports: [
    CommonModule,
    RegisterSignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterSignupModule { }
