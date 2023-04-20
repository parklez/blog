import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { ToastyService } from '../services/toasty.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css'],
})
export class UserAreaComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  username!: string;

  private authListener!: Subscription;

  constructor(
    private auth: AuthenticationService,
    private toast: ToastyService
  ) {}

  ngOnInit(): void {
    // This constantly checks for any change in the state of authentication, true or false.
    this.authListener = this.auth.getAuthListener().subscribe({
      next: (user) => {
        this.isAuthenticated = user.isAuthenticated;
        this.username = user.username;
      },
      error: (error) => {
        // Should this component be in charge of pushing this toasty?
        // Many other components may need to subscribe to isAuthenticated bool,
        // So... would it make sense to add this to app-component.ts?
        this.toast.pushNewToasty(
          error.error.error,
          // Hello there, this looks horrible doesn't it? Well let me break
          // it down for you from left to right:
          // 1 - the error object being passed as parameter above "(error)"
          // 2 - Whenever there's a BAD http request, any body message is contained in an "error" object. 
          // 3 - I made the API to return {error: reason} whenever the login process fails;
          'danger'
        );
      },
    });
  }

  ngOnDestroy() {
    this.authListener.unsubscribe();
  }
}
