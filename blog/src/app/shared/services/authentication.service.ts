import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthData } from '../models/auth-data';
import { LoginData } from '../models/login-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userJWT!: string;
  username!: string;
  authenticated = false;
  // https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
  private authListener = new BehaviorSubject({username: '', isAuthenticated: false})

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
            new Date(now.getTime() + response.expiresIn * 1000),
            username
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
            new Date(now.getTime() + response.expiresIn * 1000),
            username
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

  private saveLocalAuthData(token: string, expiresAt: Date, username: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresAt', expiresAt.toISOString());
    localStorage.setItem('username', username);
  };

  private clearLocalAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('username');
  }

  fetchLocalAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiresAt');
    const username = localStorage.getItem('username');
    if (!token || !expirationDate || !username) {
      return;
    }
    return {
      token: token,
      expiresAt: expirationDate,
      username: username
    }
  }

  loadSessionFromCookie() {
    const cookie = this.fetchLocalAuthData();
    if (cookie) {
      this.userJWT = cookie.token;
      this.username = cookie.username;
      this.authenticated = true;
      this.authListener.next({username: this.username, isAuthenticated: true})
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

  getJWT() {
    return this.userJWT;
  }

}
