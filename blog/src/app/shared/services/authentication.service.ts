import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthData } from '../models/auth-data';
import { LoginData } from '../models/login-data';
import { BehaviorSubject, Observable, map } from 'rxjs';

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

  signInUser(username: string, password: string): Observable<{
    username: string;
    isAuthenticated: boolean;
  }> {
    const bodyData: AuthData = { username, password };

    return this.http.post<LoginData>('/api/login', bodyData).pipe(
      // There's no need for pipe since there's only one operator here.
      // map operator only operates on success, doesn't handle errors,
      // I couldn't find proper documentation about this statement. 
      // https://rxjs.dev/api/operators/map
      // Another possiblity here is to use tap() and only add success function.
      map((response) => {
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
        );
        this.authListener.next({ username: username, isAuthenticated: true });
        return { username: username, isAuthenticated: true };
      })
      // catchError would "eat" the regular HttpErrorResponse above,
      // which isn't all that useful, since I want the components to have
      // the full context of it.
      //
      // The code below creates a new Error() object with different atributes,
      // (while it isn't all wrong) - It's not what I want.
      //
      //   catchError(err => {
      //     // An important lesson about using the .error on BehaviorSubject:
      //     // "calling the .error() method kills the streams from all subscribers"
      //     // which isn't what I want - I want components to always fetch the latest
      //     // status from this service.
      //     // https://stackoverflow.com/a/41828984
      //     //this.authListener.error(err)
      //     return throwError(() => new Error(err))})
      // );
    )
  }

  signUpUser(username: string, password: string): Observable<{
    username: string;
    isAuthenticated: boolean;
  }> {
    const bodyData: AuthData = { username, password };

    return this.http.post<LoginData>('/api/register', bodyData).pipe(
      map((response) => {
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
        this.authListener.next({ username: username, isAuthenticated: true });
        return { username: username, isAuthenticated: true };
      }
      ))
  }

  signOut() {
    this.clearLocalAuthData();
    this.authListener.next({username: '', isAuthenticated: false})
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

  loadSession() {
    const cookie = this.fetchLocalAuthData();
    if (!cookie) {
      return;
    }
    if (new Date() > new Date(cookie.expiresAt)) {
      this.clearLocalAuthData();
      return;
    }

    this.userJWT = cookie.token;
    this.username = cookie.username;
    this.authenticated = true;
    this.authListener.next({username: this.username, isAuthenticated: true})
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
