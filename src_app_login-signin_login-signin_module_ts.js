"use strict";
(self["webpackChunkmy_bloog"] = self["webpackChunkmy_bloog"] || []).push([["src_app_login-signin_login-signin_module_ts"],{

/***/ 2741:
/*!*****************************************************************!*\
  !*** ./src/app/login-signin/login-home/login-home.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginHomeComponent: () => (/* binding */ LoginHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/authentication.service */ 9214);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_services_toasty_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/toasty.service */ 8514);






class LoginHomeComponent {
  constructor(auth, router, toast) {
    this.auth = auth;
    this.router = router;
    this.toast = toast;
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
      "username": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required
      // Must contain letters (both uppercase and lowercase) and numbers
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    });
  }

  onSubmit() {
    this.auth.signInUser(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: error => {
        this.toast.pushNewToasty(error.error.error,
        // Hello there, this looks horrible doesn't it? Well let me break
        // it down for you from left to right:
        // 1 - the error object being passed as parameter above "(error)"
        // 2 - Whenever there's a BAD http request, any body message is contained in an "error" object.
        // 3 - I made the API to return {error: reason} whenever the login process fails;
        'is-light is-danger');
      }
    });
    this.loginForm.reset();
  }
  static #_ = this.ɵfac = function LoginHomeComponent_Factory(t) {
    return new (t || LoginHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_toasty_service__WEBPACK_IMPORTED_MODULE_1__.ToastyService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginHomeComponent,
    selectors: [["app-login-home"]],
    decls: 19,
    vars: 2,
    consts: [["id", "main", 3, "formGroup", "ngSubmit"], [1, "title", "is-4"], [1, "field"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "input"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-user"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "input"], [1, "fas", "fa-lock"], ["id", "button-right-container", 1, "field"], [1, "control"], ["type", "submit", 1, "button", 3, "disabled"]],
    template: function LoginHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginHomeComponent_Template_form_ngSubmit_0_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Log in - Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 2)(10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "p", 10)(17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["#main[_ngcontent-%COMP%] {\n    max-width: 30rem;\n    margin: auto;\n    background-color: rgba(0, 0, 0, 0.338);\n    padding: 2rem;\n    border-radius: 6px;\n}\n\nh4[_ngcontent-%COMP%] {\n    color: rgb(255, 241, 181);\n}\n\n#button-right-container[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: block;\n    clear: both;\n}\n\nbutton[_ngcontent-%COMP%] {\n    float:right;\n}\n\nhr[_ngcontent-%COMP%] {\n    background-color: rgba(52, 52, 52, 0.8);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4tc2lnbmluL2xvZ2luLWhvbWUvbG9naW4taG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMzgpO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5oNCB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI0MSwgMTgxKTtcbn1cblxuI2J1dHRvbi1yaWdodC1jb250YWluZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG5idXR0b24ge1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuXG5ociB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgNTIsIDUyLCAwLjgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9063:
/*!*************************************************************!*\
  !*** ./src/app/login-signin/login-signin-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginSigninRoutingModule: () => (/* binding */ LoginSigninRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-home/login-home.component */ 2741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_0__.LoginHomeComponent
}];
class LoginSigninRoutingModule {
  static #_ = this.ɵfac = function LoginSigninRoutingModule_Factory(t) {
    return new (t || LoginSigninRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: LoginSigninRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginSigninRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 694:
/*!*****************************************************!*\
  !*** ./src/app/login-signin/login-signin.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginSigninModule: () => (/* binding */ LoginSigninModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _login_signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-signin-routing.module */ 9063);
/* harmony import */ var _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-home/login-home.component */ 2741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





class LoginSigninModule {
  static #_ = this.ɵfac = function LoginSigninModule_Factory(t) {
    return new (t || LoginSigninModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: LoginSigninModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _login_signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginSigninRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginSigninModule, {
    declarations: [_login_home_login_home_component__WEBPACK_IMPORTED_MODULE_1__.LoginHomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _login_signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginSigninRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_login-signin_login-signin_module_ts.js.map