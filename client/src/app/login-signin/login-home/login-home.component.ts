import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { ToastyService } from '../../shared/services/toasty.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent {

  loginForm = new UntypedFormGroup({
    "username": new UntypedFormControl(null, Validators.required),
    "password": new UntypedFormControl(null, Validators.compose([
      Validators.minLength(5),
      Validators.required
      // Must contain letters (both uppercase and lowercase) and numbers
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    ]))
  });

  constructor(
    public auth: AuthenticationService,
    private router: Router,
    private toast: ToastyService
  ) { }

  onSubmit(): void {
    this.auth
      .signInUser(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.toast.pushNewToasty(
            error.error.error,
            // Hello there, this looks horrible doesn't it? Well let me break
            // it down for you from left to right:
            // 1 - the error object being passed as parameter above "(error)"
            // 2 - Whenever there's a BAD http request, any body message is contained in an "error" object.
            // 3 - I made the API to return {error: reason} whenever the login process fails;
            'is-light is-danger'
          );
        },
      });
    this.loginForm.reset();
  }

}
