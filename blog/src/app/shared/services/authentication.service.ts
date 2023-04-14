import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthData } from '../models/auth-data';
import { LoginData } from '../models/login-data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userJWT: string = '';
  username!: string;
  authenticated = false;
  private authListener = new Subject<{username: string, isAuthenticated: boolean}>();

  constructor(private http: HttpClient) { }

  signInUser(username: string, password: string) {
    const bodyData: AuthData = {username, password};
    this.http.post<LoginData>('/api/login', bodyData).subscribe({
      next: (response) => {
        if (response) {
          // Save JWT & Set authentication to true
          this.userJWT = response.token;
          this.authenticated = true;
          this.username = username;
          const now = new Date();
          // Save to local storage
          this.saveLocalAuthData(
            response.token,
            new Date(now.getTime() + response.expiresIn * 1000)
          )
          this.authListener.next({username: username, isAuthenticated: true});
        }
      },
      error: (e) => {
        // console.log(e);
        this.authListener.error(e);
      },
    })
  }

  signUpUser(username: string, password: string) {
    const bodyData: AuthData = {username, password};
    this.http.post<LoginData>('/api/register', bodyData).subscribe({
      next: (response) => {
        if (response) {
          // Save JWT & Set authentication to true
          this.userJWT = response.token;
          this.authenticated = true;
          this.username = username;
          const now = new Date();
          // Save to local storage
          this.saveLocalAuthData(
            response.token,
            new Date(now.getTime() + response.expiresIn * 1000)
          )
          this.authListener.next({username: username, isAuthenticated: true});
        }
      },
      error: (e) => {
        // console.log(e)
        this.authListener.error(e);
      },
    })
  }

  private saveLocalAuthData(token: string, expiresAt: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresAt', expiresAt.toISOString());
  };

  private clearLocalAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
  }

  private fetchLocalAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem('expiresAt');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expiresAt: expirationDate
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getUsername(): string {
    return this.username;
  }

  getAuthListener() {
    return this.authListener.asObservable();
  }
}
