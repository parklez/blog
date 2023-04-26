import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastyService } from '../../shared/services/toasty.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-signin-home',
  templateUrl: './signin-home.component.html',
  styleUrls: ['./signin-home.component.css']
})
export class SigninHomeComponent {

  signinForm = new UntypedFormGroup({
    "username": new UntypedFormControl(null, Validators.required),
    "password": new UntypedFormControl(null, Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
  });

  constructor(public auth: AuthenticationService,
              private router: Router,
              private toast: ToastyService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.signinForm.value)
    // Should the component handle an observable?
    this.auth
      .signUpUser(this.signinForm.value.username, this.signinForm.value.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.toast.pushNewToasty(
            error.error.error,
            'danger'
          );
        }
      })
    this.signinForm.reset();
  }

}
