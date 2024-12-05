import {
  BehaviorSubject,
  HttpClient,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-E5V2QDAB.js";

// src/app/shared/services/toasty.service.ts
var ToastyMessage = class {
  constructor(id, content, style, vanishInSeconds) {
    this.id = 0;
    this.id = id;
    this.content = content;
    this.style = style || "is-light is-info";
    this.vanish = vanishInSeconds || 0;
  }
};
var ToastyService = class _ToastyService {
  constructor() {
    this.messagesArray = [];
    this.i = 0;
  }
  /**
   *
   * @param message The string to be displayed.
   * @param style See https://bulma.io/documentation/overview/colors/, default: 'is-light is-info'.
   * @param vanishInSeconds time in seconds for vanishing, default: 0 (never).
   */
  pushNewToasty(message, style, vanishInSeconds) {
    const newToasty = new ToastyMessage(this.i, message, style);
    this.messagesArray.push(newToasty);
    this.i += 1;
    if (vanishInSeconds && vanishInSeconds > 0) {
      setTimeout(() => {
        this.dismissToasty(newToasty.id);
      }, vanishInSeconds * 1e3);
    }
  }
  fetchAllToasties() {
    return this.messagesArray;
  }
  dismissToasty(toastyId) {
    const position = this.messagesArray.findIndex((element) => {
      return element.id == toastyId;
    });
    if (position != -1) {
      this.messagesArray.splice(position, 1);
    }
  }
  static {
    this.\u0275fac = function ToastyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToastyService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastyService, factory: _ToastyService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/services/authentication.service.ts
var AuthenticationService = class _AuthenticationService {
  constructor(http) {
    this.http = http;
    this.authenticated = false;
    this.authListener = new BehaviorSubject({ username: "", isAuthenticated: false });
  }
  signInUser(username, password) {
    const bodyData = { username, password };
    return this.http.post("/api/login", bodyData).pipe(
      // There's no need for pipe since there's only one operator here.
      // map operator only operates on success, doesn't handle errors,
      // I couldn't find proper documentation about this statement. 
      // https://rxjs.dev/api/operators/map
      // Another possiblity here is to use tap() and only add success function.
      map((response) => {
        this.userJWT = response.token;
        this.authenticated = true;
        this.username = username;
        const now = /* @__PURE__ */ new Date();
        this.saveLocalAuthData(response.token, new Date(now.getTime() + response.expiresIn * 1e3), username);
        this.authListener.next({ username, isAuthenticated: true });
        return { username, isAuthenticated: true };
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
    );
  }
  signUpUser(username, password) {
    const bodyData = { username, password };
    return this.http.post("/api/register", bodyData).pipe(map((response) => {
      this.userJWT = response.token;
      this.authenticated = true;
      this.username = username;
      const now = /* @__PURE__ */ new Date();
      this.saveLocalAuthData(response.token, new Date(now.getTime() + response.expiresIn * 1e3), username);
      this.authListener.next({ username, isAuthenticated: true });
      return { username, isAuthenticated: true };
    }));
  }
  signOut() {
    this.clearLocalAuthData();
    this.authListener.next({ username: "", isAuthenticated: false });
  }
  saveLocalAuthData(token, expiresAt, username) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiresAt", expiresAt.toISOString());
    localStorage.setItem("username", username);
  }
  clearLocalAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("username");
  }
  fetchLocalAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiresAt");
    const username = localStorage.getItem("username");
    if (!token || !expirationDate || !username) {
      return;
    }
    return {
      token,
      expiresAt: expirationDate,
      username
    };
  }
  loadSession() {
    const cookie = this.fetchLocalAuthData();
    if (!cookie) {
      return;
    }
    if (/* @__PURE__ */ new Date() > new Date(cookie.expiresAt)) {
      this.clearLocalAuthData();
      return;
    }
    this.userJWT = cookie.token;
    this.username = cookie.username;
    this.authenticated = true;
    this.authListener.next({ username: this.username, isAuthenticated: true });
  }
  isAuthenticated() {
    return this.authenticated;
  }
  getUsername() {
    return this.username;
  }
  getAuthListener() {
    return this.authListener.asObservable();
  }
  getJWT() {
    return this.userJWT;
  }
  static {
    this.\u0275fac = function AuthenticationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthenticationService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthenticationService, factory: _AuthenticationService.\u0275fac, providedIn: "root" });
  }
};

export {
  ToastyService,
  AuthenticationService
};
//# sourceMappingURL=chunk-IQUIHAZP.js.map
