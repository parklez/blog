"use strict";
(self["webpackChunkmy_bloog"] = self["webpackChunkmy_bloog"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ 8945);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





//import { HomePageComponent } from './home/home-page/home-page.component';
const routes = [
// {
//   // Using the exported component as the '' path,
//   // if I wanted to, I could redirect 404 pages to this component as well
//   // by using '**'.
//   path: '',
//   component: HomePageComponent,
// },
{
  // Is lazy-loading every module the best approach?
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 4320)).then(m => m.HomeModule)
}, {
  path: 'projects',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_projects_projects_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./projects/projects.module */ 9334)).then(m => m.ProjectsModule)
}, {
  path: 'about',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 8822)).then(m => m.AboutModule)
}, {
  path: 'login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_login-signin_login-signin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login-signin/login-signin.module */ 694)).then(m => m.LoginSigninModule)
}, {
  path: 'signup',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_register-signup_register-signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register-signup/register-signup.module */ 4177)).then(m => m.RegisterSignupModule)
}, {
  path: 'not-found',
  component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: '/not-found'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
      useHash: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.static
    }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/authentication.service */ 9214);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/header/header.component */ 1074);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ 1777);
/* harmony import */ var _shared_toasty_notification_toasty_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/toasty-notification/toasty-notification.component */ 6462);
/* harmony import */ var _shared_user_area_user_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/user-area/user-area.component */ 8498);









function AppComponent_app_user_area_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-user-area");
  }
}
const _c0 = () => ({
  exact: true
});
class AppComponent {
  constructor(auth) {
    this.auth = auth;
    this.static = !src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment?.static;
  }
  ngOnInit() {
    this.auth.loadSession();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 21,
    vars: 3,
    consts: [["id", "notifications"], ["id", "page"], ["id", "user-area"], [4, "ngIf"], ["id", "header"], ["id", "navigation-bar", "role", "navigation", 1, "navbar"], ["src", "./assets/panda.gif", "alt", "", 1, "panda"], [1, "navbar-item"], [1, "buttons"], ["routerLink", "", "routerLinkActive", "active-nav", "role", "button", 1, "button", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "projects", "routerLinkActive", "active-nav", "role", "button", 1, "button", "nav-item"], ["routerLink", "about", "routerLinkActive", "active-nav", "role", "button", 1, "button", "nav-item"], ["id", "main-content"], ["id", "footer"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-toasty-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AppComponent_app_user_area_4_Template, 1, 0, "app-user-area", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.static);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _shared_toasty_notification_toasty_notification_component__WEBPACK_IMPORTED_MODULE_4__.ToastyNotificationComponent, _shared_user_area_user_area_component__WEBPACK_IMPORTED_MODULE_5__.UserAreaComponent],
    styles: ["#page[_ngcontent-%COMP%] {\n    max-width: 60rem;\n    margin: auto;\n}\n\n#main-content[_ngcontent-%COMP%] {\n    min-height: 40rem;\n    margin-bottom: auto;\n    padding: 1rem;\n}\n\n#navigation-bar[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.338);\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n    border-radius: 6px;\n    display: flex; \n\n}\n\n.nav-item[_ngcontent-%COMP%] {\n    background-color: rgba(255, 255, 255, 0.2);\n    -webkit-backdrop-filter: blur(50px);\n            backdrop-filter: blur(50px);\n}\n\n.active-nav[_ngcontent-%COMP%] {\n    background-color: rgba(255, 255, 255, 0.742);\n    color: black;\n}\n\n.panda[_ngcontent-%COMP%] {\n    \n\n    width: 10rem;\n    right: 2rem;\n    top: -6.6rem;\n    position: absolute;\n    \n\n}\n\n#user-area[_ngcontent-%COMP%] {\n    position: sticky;\n    z-index: 31; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhLEVBQUUsMkRBQTJEO0FBQzlFOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdEQUF3RDtJQUN4RCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBRSxnRUFBZ0U7QUFDakYiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZSB7XG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbiNtYWluLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDQwcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuI25hdmlnYXRpb24tYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzM4KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7IC8qIFRoaXMgcHJldmVudHMgdGhpcyBiYXIgZnJvbSBleHBhbmRpbmcgZXZlciBzbyBzbGlnaHRseSAqL1xufVxuXG4ubmF2LWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCk7XG59XG5cbi5hY3RpdmUtbmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQyKTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5wYW5kYSB7XG4gICAgLyogT3JpZ2luYWxseSBpbnRlbmRlZCBmb3IgYSBzdGF0aWMgcGljdHVyZSBvZiBhIHBhbmRhICovXG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIHJpZ2h0OiAycmVtO1xuICAgIHRvcDogLTYuNnJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyp0cmFuc2Zvcm06IHNjYWxlWCgtMSk7Ki9cbn1cblxuI3VzZXItYXJlYSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiAzMTsgLyogVGhpcyBndWFyYW50ZWVzIHRoYXQgdGhlIGxpbmsgaXMgYWx3YXlzIG9uIHRvcCBvZiB0aGUgcGFuZGEgKi9cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 6208);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _shared_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/interceptor/auth.interceptor */ 6286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);



// import { HomeModule } from './home/home.module';
// import { ProjectsModule } from './projects/projects.module';
// import { AboutModule } from './about/about.module';




class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
      useClass: _shared_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
    // Commenting these out in order to implement 'lazy-loading'
    // HomeModule,
    // ProjectsModule,
    // AboutModule,
    _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
    // Commenting these out in order to implement 'lazy-loading'
    // HomeModule,
    // ProjectsModule,
    // AboutModule,
    _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 1777:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


class FooterComponent {
  constructor() {
    this.currentTime = new Date();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 11,
    vars: 4,
    consts: [[1, "footer"], [1, "content"], ["target", "_blank", "href", "https://www.youtube.com/c/leparklez"], ["target", "_blank", "href", "https://github.com/parklez"], ["target", "_blank", "href", "https://www.twitch.tv/leparklez"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "p")(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Twitch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 1, ctx.currentTime, "short"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".footer[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.338);\n    padding: 3rem;\n    color: white;\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n    border-radius: 6px;\n}\n\na[_ngcontent-%COMP%] {\n    padding-right: 2rem;\n    color: white;\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: rgb(202, 236, 174);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzM4KTtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5hIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlciB7XG4gICAgY29sb3I6IHJnYigyMDIsIDIzNiwgMTc0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1074:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HeaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 3,
    vars: 0,
    consts: [[1, "title"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " parklez.dev ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: rgb(221, 55, 79);\n    padding: 3rem 3rem 3rem 3rem;\n    text-align: left;\n    text-shadow: 1px 1px #000000;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImRpdiBoMSB7XG4gICAgY29sb3I6IHJnYigyMjEsIDU1LCA3OSk7XG4gICAgcGFkZGluZzogM3JlbSAzcmVtIDNyZW0gM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4ICMwMDAwMDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6286:
/*!********************************************************!*\
  !*** ./src/app/shared/interceptor/auth.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 9214);


class AuthInterceptor {
  constructor(auth) {
    this.auth = auth;
  }
  intercept(request, next) {
    const tokenJWT = this.auth.getJWT();
    if (tokenJWT) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${tokenJWT}`)
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 8945:
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NotFoundComponent {
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 4,
    vars: 0,
    consts: [[1, "center", "box"], [1, "title", "is-3"], ["src", "https://media.istockphoto.com/id/171257665/pt/foto/triste-panda-gigante-no-jardim-zool%C3%B3gico.jpg?s=1024x1024&w=is&k=20&c=T_puC86XIm2yD56s0g6eramzrPV6Acy808ezGkeI_kI="]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "panda not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".center[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: aliceblue;\n}\n\ndiv[_ngcontent-%COMP%] {\n  margin: 0rem 4rem 1rem 4rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbmRpdiB7XG4gIG1hcmdpbjogMHJlbSA0cmVtIDFyZW0gNHJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9214:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationService: () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);



class AuthenticationService {
  constructor(http) {
    this.http = http;
    this.authenticated = false;
    // https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
    this.authListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      username: '',
      isAuthenticated: false
    });
  }
  signInUser(username, password) {
    const bodyData = {
      username,
      password
    };
    return this.http.post('/api/login', bodyData).pipe(
    // There's no need for pipe since there's only one operator here.
    // map operator only operates on success, doesn't handle errors,
    // I couldn't find proper documentation about this statement. 
    // https://rxjs.dev/api/operators/map
    // Another possiblity here is to use tap() and only add success function.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      // Save JWT & Set authentication to true
      this.userJWT = response.token;
      this.authenticated = true;
      this.username = username;
      const now = new Date();
      // Save to local storage
      this.saveLocalAuthData(response.token, new Date(now.getTime() + response.expiresIn * 1000), username);
      this.authListener.next({
        username: username,
        isAuthenticated: true
      });
      return {
        username: username,
        isAuthenticated: true
      };
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
    const bodyData = {
      username,
      password
    };
    return this.http.post('/api/register', bodyData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      // Save JWT & Set authentication to true
      this.userJWT = response.token;
      this.authenticated = true;
      this.username = username;
      const now = new Date();
      // Save to local storage
      this.saveLocalAuthData(response.token, new Date(now.getTime() + response.expiresIn * 1000), username);
      this.authListener.next({
        username: username,
        isAuthenticated: true
      });
      return {
        username: username,
        isAuthenticated: true
      };
    }));
  }
  signOut() {
    this.clearLocalAuthData();
    this.authListener.next({
      username: '',
      isAuthenticated: false
    });
  }
  saveLocalAuthData(token, expiresAt, username) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresAt', expiresAt.toISOString());
    localStorage.setItem('username', username);
  }
  clearLocalAuthData() {
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
    };
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
    this.authListener.next({
      username: this.username,
      isAuthenticated: true
    });
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
  static #_ = this.ɵfac = function AuthenticationService_Factory(t) {
    return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthenticationService,
    factory: AuthenticationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8514:
/*!***************************************************!*\
  !*** ./src/app/shared/services/toasty.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastyMessage: () => (/* binding */ ToastyMessage),
/* harmony export */   ToastyService: () => (/* binding */ ToastyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ToastyMessage {
  constructor(id, content, style, vanishInSeconds) {
    this.id = 0;
    this.id = id;
    this.content = content;
    this.style = style || 'is-light is-info';
    this.vanish = vanishInSeconds || 0;
  }
}
class ToastyService {
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
      }, vanishInSeconds * 1000);
    }
  }
  fetchAllToasties() {
    return this.messagesArray;
  }
  dismissToasty(toastyId) {
    const position = this.messagesArray.findIndex(element => {
      return element.id == toastyId;
    });
    if (position != -1) {
      this.messagesArray.splice(position, 1);
    }
  }
  static #_ = this.ɵfac = function ToastyService_Factory(t) {
    return new (t || ToastyService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ToastyService,
    factory: ToastyService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 1074);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 1777);
/* harmony import */ var _toasty_notification_toasty_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toasty-notification/toasty-notification.component */ 6462);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _user_area_user_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-area/user-area.component */ 8498);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ 8945);
/* harmony import */ var _special_message_special_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./special-message/special-message.component */ 5437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule // UserAreaComponent has router links!
    ]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _toasty_notification_toasty_notification_component__WEBPACK_IMPORTED_MODULE_2__.ToastyNotificationComponent, _user_area_user_area_component__WEBPACK_IMPORTED_MODULE_3__.UserAreaComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent, _special_message_special_message_component__WEBPACK_IMPORTED_MODULE_5__.SpecialMessageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule // UserAreaComponent has router links!
    ],
    exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _toasty_notification_toasty_notification_component__WEBPACK_IMPORTED_MODULE_2__.ToastyNotificationComponent, _user_area_user_area_component__WEBPACK_IMPORTED_MODULE_3__.UserAreaComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent, _special_message_special_message_component__WEBPACK_IMPORTED_MODULE_5__.SpecialMessageComponent]
  });
})();

/***/ }),

/***/ 5437:
/*!*********************************************************************!*\
  !*** ./src/app/shared/special-message/special-message.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecialMessageComponent: () => (/* binding */ SpecialMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SpecialMessageComponent {
  static #_ = this.ɵfac = function SpecialMessageComponent_Factory(t) {
    return new (t || SpecialMessageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SpecialMessageComponent,
    selectors: [["app-special-message"]],
    inputs: {
      message: "message"
    },
    decls: 3,
    vars: 1,
    consts: [[1, "marquee"]],
    template: function SpecialMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
      }
    },
    styles: [".marquee[_ngcontent-%COMP%] {\n    width: 100%;\n    \n\n    white-space: nowrap;\n    \n\n    overflow: hidden;\n    \n\n\n    box-sizing: border-box;\n    padding: 0rem 1rem 1rem 1rem;\n}\n\n.marquee[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    \n\n\n    display: inline-block;\n    \n\n    padding-left: calc(100% + 1rem);\n    padding-right: 1rem;\n    animation: _ngcontent-%COMP%_marquee 20s linear infinite;\n    text-shadow: 1px 1px #000;\n    color: rgb(246, 255, 198);\n    font-weight: bold;\n}\n\n@keyframes _ngcontent-%COMP%_marquee {\n    0% {\n        transform: translate(0, 0);\n    }\n\n    100% {\n        transform: translate(-100%, 0);\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NwZWNpYWwtbWVzc2FnZS9zcGVjaWFsLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpREFBaUQ7SUFDakQsbUJBQW1CO0lBQ25CLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEI7aUVBQzZEO0lBQzdELHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTswQ0FDc0M7SUFDdEMscUJBQXFCO0lBQ3JCLHNFQUFzRTtJQUN0RSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubWFycXVlZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogVGhpcyBwcmV2ZW50cyBsb25nZXIgdGV4dCBmcm9tIGJlaW5nIHdyYXBwZWQgKi9cbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC8qIFRoaXMgaGlkZXMgb3ZlcmZsb3duIHRleHQgZnJvbSB0aGUgY29udGFpbmVyICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvKiBUaGlzIGhlbHBzIHRoZSBjaGlsZCBwYXJhZ3JhcGggdG8gYmUgcHJvcGVybHkgcGFkZGVkIFxuICAgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3gtc2l6aW5nICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW0gMXJlbSAxcmVtO1xufVxuXG4ubWFycXVlZSBwIHtcbiAgICAvKiBUaGlzIGhlbHBzIHRoZSBkaXYgdG8gZXhwYW5kIGJhc2VkIG9uIHRoZSB0ZXh0IHNpemVcbiAgICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNjE0MTQ1NzEgKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLyogU2V0cyB0aGUgc3RhcnQgcG9zaXRpb24gYXQgdGhlIGhpZGRlbiByaWdodCBlZGdlIG9mIHRoZSBjb250YWluZXIgKi9cbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMTAwJSArIDFyZW0pO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgYW5pbWF0aW9uOiBtYXJxdWVlIDIwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzAwMDtcbiAgICBjb2xvcjogcmdiKDI0NiwgMjU1LCAxOTgpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6462:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/toasty-notification/toasty-notification.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastyNotificationComponent: () => (/* binding */ ToastyNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_toasty_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/toasty.service */ 8514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function ToastyNotificationComponent_aside_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside")(1, "div", 2)(2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastyNotificationComponent_aside_1_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const message_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.dismiss(message_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", message_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r1.content, " ");
  }
}
class ToastyNotificationComponent {
  constructor(toast) {
    this.toast = toast;
    this.messages = [];
  }
  ngOnInit() {
    // Whenever a new token is pushed to the array inside the service class,
    // There is no need to update this component's array because they're refenced
    // the same in memory.
    this.messages = this.toast.fetchAllToasties();
  }
  dismiss(toastyId) {
    // For the future, an observable would be better(?)
    this.toast.dismissToasty(toastyId);
  }
  static #_ = this.ɵfac = function ToastyNotificationComponent_Factory(t) {
    return new (t || ToastyNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toasty_service__WEBPACK_IMPORTED_MODULE_0__.ToastyService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ToastyNotificationComponent,
    selectors: [["app-toasty-notification"]],
    decls: 2,
    vars: 1,
    consts: [[1, "wrapper"], [4, "ngFor", "ngForOf"], ["id", "content", 1, "notification", "roundy", 3, "ngClass"], [1, "delete", 3, "click"]],
    template: function ToastyNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastyNotificationComponent_aside_1_Template, 4, 2, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  bottom: 3rem;\n  right: 0%;\n  max-width: 35rem;\n}\n\n.notification[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n\n.roundy[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n#content[_ngcontent-%COMP%] {\n  padding-right: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3RvYXN0eS1ub3RpZmljYXRpb24vdG9hc3R5LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDNyZW07XG4gIHJpZ2h0OiAwJTtcbiAgbWF4LXdpZHRoOiAzNXJlbTtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuLnJvdW5keSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNjb250ZW50IHtcbiAgcGFkZGluZy1yaWdodDogMi41cmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8498:
/*!*********************************************************!*\
  !*** ./src/app/shared/user-area/user-area.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAreaComponent: () => (/* binding */ UserAreaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 9214);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);




function UserAreaComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAreaComponent_span_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.logOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function UserAreaComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function UserAreaComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ~ ", ctx_r2.username, "");
  }
}
class UserAreaComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.isAuthenticated = false;
  }
  ngOnInit() {
    // This constantly checks for any change in the state of authentication, true or false.
    this.authListener = this.auth.getAuthListener().subscribe({
      next: user => {
        this.isAuthenticated = user.isAuthenticated;
        this.username = user.username;
      }
    });
  }
  logOut() {
    this.auth.signOut();
    this.router.navigate(['/']);
  }
  ngOnDestroy() {
    this.authListener.unsubscribe();
  }
  static #_ = this.ɵfac = function UserAreaComponent_Factory(t) {
    return new (t || UserAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserAreaComponent,
    selectors: [["app-user-area"]],
    decls: 6,
    vars: 3,
    consts: [["id", "login"], [4, "ngIf"], [3, "click"], ["routerLink", "login"], ["routerLink", "signup"]],
    template: function UserAreaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserAreaComponent_span_2_Template, 3, 0, "span", 1)(3, UserAreaComponent_span_3_Template, 6, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " ] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserAreaComponent_span_5_Template, 3, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.username);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["#login[_ngcontent-%COMP%] {\n    float: right;\n    padding: 0.5rem;\n    background-color: rgba(0, 0, 0, 0.338);\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n    border-radius: 6px;\n}\n\na[_ngcontent-%COMP%] {\n    color: pink;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VzZXItYXJlYS91c2VyLWFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIlxuI2xvZ2luIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMzgpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbmEge1xuICAgIGNvbG9yOiBwaW5rO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  static: true
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map