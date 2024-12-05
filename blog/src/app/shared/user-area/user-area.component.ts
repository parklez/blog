import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-user-area',
    templateUrl: './user-area.component.html',
    styleUrls: ['./user-area.component.css'],
    standalone: false
})
export class UserAreaComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  username!: string;

  private authListener!: Subscription;

  constructor(private auth: AuthenticationService,
              private router: Router,) {}

  ngOnInit(): void {
    // This constantly checks for any change in the state of authentication, true or false.
    this.authListener = this.auth.getAuthListener().subscribe({
      next: (user) => {
        this.isAuthenticated = user.isAuthenticated;
        this.username = user.username;
      },
    });
  }

  logOut(): void {
    this.auth.signOut();
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.authListener.unsubscribe();
  }
}
