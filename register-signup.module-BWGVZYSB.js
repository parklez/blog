import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-6N7UIR2U.js";
import {
  AuthenticationService,
  ToastyService
} from "./chunk-K3OYZ5CD.js";
import {
  CommonModule,
  Router,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-LBCE36CT.js";

// src/app/register-signup/signin-home/signin-home.component.ts
var _SigninHomeComponent = class _SigninHomeComponent {
  constructor(auth, router, toast) {
    this.auth = auth;
    this.router = router;
    this.toast = toast;
    this.signinForm = new UntypedFormGroup({
      "username": new UntypedFormControl(null, Validators.required),
      "password": new UntypedFormControl(null, Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.signinForm.value);
    this.auth.signUpUser(this.signinForm.value.username, this.signinForm.value.password).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (error) => {
        this.toast.pushNewToasty(error.error.error, "is-light is-danger");
      }
    });
    this.signinForm.reset();
  }
};
_SigninHomeComponent.\u0275fac = function SigninHomeComponent_Factory(t) {
  return new (t || _SigninHomeComponent)(\u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastyService));
};
_SigninHomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SigninHomeComponent, selectors: [["app-signin-home"]], decls: 19, vars: 2, consts: [["id", "main", 3, "ngSubmit", "formGroup"], [1, "title", "is-4"], [1, "field"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "input"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-user"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "input"], [1, "fas", "fa-lock"], ["id", "button-right-container", 1, "field"], [1, "control"], ["type", "submit", 1, "button", 3, "disabled"]], template: function SigninHomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275listener("ngSubmit", function SigninHomeComponent_Template_form_ngSubmit_0_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(1, "h4", 1);
    \u0275\u0275text(2, " Sign Up - Register account ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr");
    \u0275\u0275elementStart(4, "div", 2)(5, "p", 3);
    \u0275\u0275element(6, "input", 4);
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275element(8, "i", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 2)(10, "p", 3);
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275elementStart(12, "span", 5);
    \u0275\u0275element(13, "i", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "br");
    \u0275\u0275elementStart(15, "div", 9)(16, "p", 10)(17, "button", 11);
    \u0275\u0275text(18, " Login ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.signinForm);
    \u0275\u0275advance(17);
    \u0275\u0275property("disabled", !ctx.signinForm.valid);
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n#main[_ngcontent-%COMP%] {\n  max-width: 30rem;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.338);\n  padding: 2rem;\n  border-radius: 6px;\n}\nh4[_ngcontent-%COMP%] {\n  color: rgb(255, 241, 181);\n}\n#button-right-container[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  clear: both;\n}\nbutton[_ngcontent-%COMP%] {\n  float: right;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: rgba(52, 52, 52, 0.8);\n}\n#terms[_ngcontent-%COMP%] {\n  color: rgba(52, 52, 52, 0.8);\n}\n/*# sourceMappingURL=signin-home.component.css.map */'] });
var SigninHomeComponent = _SigninHomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SigninHomeComponent, { className: "SigninHomeComponent", filePath: "src/app/register-signup/signin-home/signin-home.component.ts", lineNumber: 13 });
})();

// src/app/register-signup/register-signup-routing.module.ts
var routes = [
  {
    path: "",
    component: SigninHomeComponent
  }
];
var _RegisterSignupRoutingModule = class _RegisterSignupRoutingModule {
};
_RegisterSignupRoutingModule.\u0275fac = function RegisterSignupRoutingModule_Factory(t) {
  return new (t || _RegisterSignupRoutingModule)();
};
_RegisterSignupRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RegisterSignupRoutingModule });
_RegisterSignupRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var RegisterSignupRoutingModule = _RegisterSignupRoutingModule;

// src/app/register-signup/register-signup.module.ts
var _RegisterSignupModule = class _RegisterSignupModule {
};
_RegisterSignupModule.\u0275fac = function RegisterSignupModule_Factory(t) {
  return new (t || _RegisterSignupModule)();
};
_RegisterSignupModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RegisterSignupModule });
_RegisterSignupModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  RegisterSignupRoutingModule,
  ReactiveFormsModule
] });
var RegisterSignupModule = _RegisterSignupModule;
export {
  RegisterSignupModule
};
//# sourceMappingURL=register-signup.module-BWGVZYSB.js.map
