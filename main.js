import {
  FooterComponent,
  HeaderComponent,
  NotFoundComponent,
  SharedModule,
  ToastyNotificationComponent,
  UserAreaComponent,
  environment
} from "./chunk-B4JF42AW.js";
import {
  AuthenticationService
} from "./chunk-K3OYZ5CD.js";
import {
  BrowserModule,
  HTTP_INTERCEPTORS,
  NgIf,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  enableProdMode,
  platformBrowser,
  provideHttpClient,
  withInterceptorsFromDi,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-LBCE36CT.js";

// src/app/app-routing.module.ts
var routes = [
  // {
  //   // Using the exported component as the '' path,
  //   // if I wanted to, I could redirect 404 pages to this component as well
  //   // by using '**'.
  //   path: '',
  //   component: HomePageComponent,
  // },
  {
    // Is lazy-loading every module the best approach?
    path: "",
    loadChildren: () => import("./home.module-3563FMRT.js").then((m) => m.HomeModule)
  },
  {
    path: "projects",
    loadChildren: () => import("./projects.module-OTMIUPEJ.js").then((m) => m.ProjectsModule)
  },
  {
    path: "about",
    loadChildren: () => import("./about.module-3DCJDI37.js").then((m) => m.AboutModule)
  },
  {
    path: "login",
    loadChildren: () => import("./login-signin.module-DOO5KX3T.js").then((m) => m.LoginSigninModule)
  },
  {
    path: "signup",
    loadChildren: () => import("./register-signup.module-BWGVZYSB.js").then((m) => m.RegisterSignupModule)
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "/not-found"
  }
];
var _AppRoutingModule = class _AppRoutingModule {
};
_AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
_AppRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes, { useHash: environment.static }), RouterModule] });
var AppRoutingModule = _AppRoutingModule;

// src/app/app.component.ts
var _c0 = () => ({ exact: true });
function AppComponent_app_user_area_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-user-area");
  }
}
var _AppComponent = class _AppComponent {
  constructor(auth) {
    this.auth = auth;
    this.static = !environment?.static;
  }
  ngOnInit() {
    this.auth.loadSession();
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(\u0275\u0275directiveInject(AuthenticationService));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 21, vars: 3, consts: [["id", "notifications"], ["id", "page"], ["id", "user-area"], [4, "ngIf"], ["id", "header"], ["id", "navigation-bar", "role", "navigation", 1, "navbar"], ["src", "./assets/panda.gif", "alt", "", 1, "panda"], [1, "navbar-item"], [1, "buttons"], ["routerLink", "", "routerLinkActive", "active-nav", "role", "button", 1, "button", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "projects", "routerLinkActive", "active-nav", "role", "button", 1, "button", "nav-item"], ["routerLink", "about", "routerLinkActive", "active-nav", "role", "button", 1, "button", "nav-item"], ["id", "main-content"], ["id", "footer"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-toasty-notification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1)(3, "div", 2);
    \u0275\u0275template(4, AppComponent_app_user_area_4_Template, 1, 0, "app-user-area", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275element(6, "app-header");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "nav", 5);
    \u0275\u0275element(8, "img", 6);
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "a", 9);
    \u0275\u0275text(12, " Home ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 10);
    \u0275\u0275text(14, " Projects ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 11);
    \u0275\u0275text(16, " About ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275element(18, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13);
    \u0275\u0275element(20, "app-footer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.static);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c0));
  }
}, dependencies: [NgIf, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, ToastyNotificationComponent, UserAreaComponent], styles: ["\n\n#page[_ngcontent-%COMP%] {\n  max-width: 60rem;\n  margin: auto;\n}\n#main-content[_ngcontent-%COMP%] {\n  min-height: 40rem;\n  margin-bottom: auto;\n  padding: 1rem;\n}\n#navigation-bar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.338);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 6px;\n  display: flex;\n}\n.nav-item[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(50px);\n  backdrop-filter: blur(50px);\n}\n.active-nav[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.742);\n  color: black;\n}\n.panda[_ngcontent-%COMP%] {\n  width: 10rem;\n  right: 2rem;\n  top: -6.6rem;\n  position: absolute;\n}\n#user-area[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 31;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/app/shared/interceptor/auth.interceptor.ts
var _AuthInterceptor = class _AuthInterceptor {
  constructor(auth) {
    this.auth = auth;
  }
  intercept(request, next) {
    const tokenJWT = this.auth.getJWT();
    if (tokenJWT) {
      const authReq = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${tokenJWT}`)
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
};
_AuthInterceptor.\u0275fac = function AuthInterceptor_Factory(t) {
  return new (t || _AuthInterceptor)(\u0275\u0275inject(AuthenticationService));
};
_AuthInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
var AuthInterceptor = _AuthInterceptor;

// src/app/app.module.ts
var _AppModule = class _AppModule {
};
_AppModule.\u0275fac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
_AppModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  provideHttpClient(withInterceptorsFromDi())
], imports: [
  BrowserModule,
  // Commenting these out in order to implement 'lazy-loading'
  // HomeModule,
  // ProjectsModule,
  // AboutModule,
  AppRoutingModule,
  // This goes down the list, so that Angular routes to our other routes first.
  SharedModule
] });
var AppModule = _AppModule;

// src/main.ts
if (environment.production) {
  enableProdMode();
}
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
