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
} from "./chunk-J4XXIY4M.js";
import {
  AuthenticationService,
  ToastyService
} from "./chunk-IQUIHAZP.js";
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
} from "./chunk-E5V2QDAB.js";

// src/app/login-signin/login-home/login-home.component.ts
var LoginHomeComponent = class _LoginHomeComponent {
  constructor(auth, router, toast) {
    this.auth = auth;
    this.router = router;
    this.toast = toast;
    this.loginForm = new UntypedFormGroup({
      "username": new UntypedFormControl(null, Validators.required),
      "password": new UntypedFormControl(null, Validators.compose([
        Validators.minLength(5),
        Validators.required
        // Must contain letters (both uppercase and lowercase) and numbers
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    });
  }
  onSubmit() {
    this.auth.signInUser(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (error) => {
        this.toast.pushNewToasty(
          error.error.error,
          // Hello there, this looks horrible doesn't it? Well let me break
          // it down for you from left to right:
          // 1 - the error object being passed as parameter above "(error)"
          // 2 - Whenever there's a BAD http request, any body message is contained in an "error" object.
          // 3 - I made the API to return {error: reason} whenever the login process fails;
          "is-light is-danger"
        );
      }
    });
    this.loginForm.reset();
  }
  static {
    this.\u0275fac = function LoginHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginHomeComponent)(\u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginHomeComponent, selectors: [["app-login-home"]], standalone: false, decls: 19, vars: 2, consts: [["id", "main", 3, "ngSubmit", "formGroup"], [1, "title", "is-4"], [1, "field"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "input"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-user"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "input"], [1, "fas", "fa-lock"], ["id", "button-right-container", 1, "field"], [1, "control"], ["type", "submit", 1, "button", 3, "disabled"]], template: function LoginHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function LoginHomeComponent_Template_form_ngSubmit_0_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(1, "h4", 1);
        \u0275\u0275text(2, " Log in - Sign in ");
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
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(17);
        \u0275\u0275property("disabled", !ctx.loginForm.valid);
      }
    }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n#main[_ngcontent-%COMP%] {\n  max-width: 30rem;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.338);\n  padding: 2rem;\n  border-radius: 6px;\n}\nh4[_ngcontent-%COMP%] {\n  color: rgb(255, 241, 181);\n}\n#button-right-container[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  clear: both;\n}\nbutton[_ngcontent-%COMP%] {\n  float: right;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: rgba(52, 52, 52, 0.8);\n}\n/*# sourceMappingURL=login-home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginHomeComponent, { className: "LoginHomeComponent", filePath: "src/app/login-signin/login-home/login-home.component.ts", lineNumber: 14 });
})();

// src/app/login-signin/login-signin-routing.module.ts
var routes = [
  {
    path: "",
    component: LoginHomeComponent
  }
];
var LoginSigninRoutingModule = class _LoginSigninRoutingModule {
  static {
    this.\u0275fac = function LoginSigninRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginSigninRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginSigninRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/login-signin/login-signin.module.ts
var LoginSigninModule = class _LoginSigninModule {
  static {
    this.\u0275fac = function LoginSigninModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginSigninModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginSigninModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      LoginSigninRoutingModule,
      ReactiveFormsModule
    ] });
  }
};
export {
  LoginSigninModule
};
//# sourceMappingURL=login-signin.module-4RXJYDFK.js.map
