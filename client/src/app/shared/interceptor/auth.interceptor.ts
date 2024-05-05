import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenJWT = this.auth.getJWT();

    if (tokenJWT) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${tokenJWT}`)
      });
  
      return next.handle(authReq);
    }
  return next.handle(request);
  }
}