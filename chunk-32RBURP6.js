import {
  AuthenticationService,
  ToastyService
} from "./chunk-LA75226S.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RB76LCDH.js";

// src/environments/environment.ts
var environment = {
  production: true,
  static: true
};

// src/app/shared/header/header.component.ts
var _HeaderComponent = class _HeaderComponent {
  constructor() {
  }
  ngOnInit() {
  }
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)();
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "title"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h1", 0);
    \u0275\u0275text(2, " parklez.dev ");
    \u0275\u0275elementEnd()();
  }
}, styles: ["\n\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: rgb(221, 55, 79);\n  padding: 3rem 3rem 3rem 3rem;\n  text-align: left;\n  text-shadow: 1px 1px #000000;\n}\n/*# sourceMappingURL=header.component.css.map */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/shared/header/header.component.ts", lineNumber: 8 });
})();

// src/app/shared/footer/footer.component.ts
var _FooterComponent = class _FooterComponent {
  constructor() {
    this.currentTime = /* @__PURE__ */ new Date();
  }
  ngOnInit() {
  }
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)();
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 4, consts: [[1, "footer"], [1, "content"], ["target", "_blank", "href", "https://www.youtube.com/c/leparklez"], ["target", "_blank", "href", "https://github.com/parklez"], ["target", "_blank", "href", "https://www.twitch.tv/leparklez"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "p")(3, "a", 2);
    \u0275\u0275text(4, "Youtube");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 3);
    \u0275\u0275text(6, "Github");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 4);
    \u0275\u0275text(8, "Twitch");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 1, ctx.currentTime, "short"), " ");
  }
}, dependencies: [DatePipe], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.338);\n  padding: 3rem;\n  color: white;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 6px;\n}\na[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n  color: white;\n}\na[_ngcontent-%COMP%]:hover {\n  color: rgb(202, 236, 174);\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/footer/footer.component.ts", lineNumber: 8 });
})();

// src/app/shared/toasty-notification/toasty-notification.component.ts
function ToastyNotificationComponent_aside_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside")(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function ToastyNotificationComponent_aside_1_Template_button_click_2_listener() {
      const message_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismiss(message_r2.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", message_r2.style);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", message_r2.content, " ");
  }
}
var _ToastyNotificationComponent = class _ToastyNotificationComponent {
  constructor(toast) {
    this.toast = toast;
    this.messages = [];
  }
  ngOnInit() {
    this.messages = this.toast.fetchAllToasties();
  }
  dismiss(toastyId) {
    this.toast.dismissToasty(toastyId);
  }
};
_ToastyNotificationComponent.\u0275fac = function ToastyNotificationComponent_Factory(t) {
  return new (t || _ToastyNotificationComponent)(\u0275\u0275directiveInject(ToastyService));
};
_ToastyNotificationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastyNotificationComponent, selectors: [["app-toasty-notification"]], decls: 2, vars: 1, consts: [[1, "wrapper"], [4, "ngFor", "ngForOf"], ["id", "content", 1, "notification", "roundy", 3, "ngClass"], [1, "delete", 3, "click"]], template: function ToastyNotificationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, ToastyNotificationComponent_aside_1_Template, 4, 2, "aside", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.messages);
  }
}, dependencies: [NgClass, NgForOf], styles: ["\n\n.wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  bottom: 3rem;\n  right: 0%;\n  max-width: 35rem;\n}\n.notification[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.roundy[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n#content[_ngcontent-%COMP%] {\n  padding-right: 2.5rem;\n}\n/*# sourceMappingURL=toasty-notification.component.css.map */"] });
var ToastyNotificationComponent = _ToastyNotificationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastyNotificationComponent, { className: "ToastyNotificationComponent", filePath: "src/app/shared/toasty-notification/toasty-notification.component.ts", lineNumber: 9 });
})();

// src/app/shared/user-area/user-area.component.ts
function UserAreaComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "a", 2);
    \u0275\u0275listener("click", function UserAreaComponent_span_2_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logOut());
    });
    \u0275\u0275text(2, " Log out ");
    \u0275\u0275elementEnd()();
  }
}
function UserAreaComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 3);
    \u0275\u0275text(2, " Log in ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " / ");
    \u0275\u0275elementStart(4, "a", 4);
    \u0275\u0275text(5, " Sign Up ");
    \u0275\u0275elementEnd()();
  }
}
function UserAreaComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ~ ", ctx_r1.username, "");
  }
}
var _UserAreaComponent = class _UserAreaComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.isAuthenticated = false;
  }
  ngOnInit() {
    this.authListener = this.auth.getAuthListener().subscribe({
      next: (user) => {
        this.isAuthenticated = user.isAuthenticated;
        this.username = user.username;
      }
    });
  }
  logOut() {
    this.auth.signOut();
    this.router.navigate(["/"]);
  }
  ngOnDestroy() {
    this.authListener.unsubscribe();
  }
};
_UserAreaComponent.\u0275fac = function UserAreaComponent_Factory(t) {
  return new (t || _UserAreaComponent)(\u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(Router));
};
_UserAreaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAreaComponent, selectors: [["app-user-area"]], decls: 6, vars: 3, consts: [["id", "login"], [4, "ngIf"], [3, "click"], ["routerLink", "login"], ["routerLink", "signup"]], template: function UserAreaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, " [ ");
    \u0275\u0275template(2, UserAreaComponent_span_2_Template, 3, 0, "span", 1)(3, UserAreaComponent_span_3_Template, 6, 0, "span", 1);
    \u0275\u0275text(4, " ] ");
    \u0275\u0275template(5, UserAreaComponent_span_5_Template, 3, 1, "span", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isAuthenticated);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isAuthenticated);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.username);
  }
}, dependencies: [NgIf, RouterLink], styles: ["\n\n#login[_ngcontent-%COMP%] {\n  float: right;\n  padding: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.338);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 6px;\n}\na[_ngcontent-%COMP%] {\n  color: pink;\n}\n/*# sourceMappingURL=user-area.component.css.map */"] });
var UserAreaComponent = _UserAreaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAreaComponent, { className: "UserAreaComponent", filePath: "src/app/shared/user-area/user-area.component.ts", lineNumber: 11 });
})();

// src/app/shared/not-found/not-found.component.ts
var _NotFoundComponent = class _NotFoundComponent {
};
_NotFoundComponent.\u0275fac = function NotFoundComponent_Factory(t) {
  return new (t || _NotFoundComponent)();
};
_NotFoundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], decls: 4, vars: 0, consts: [[1, "center", "box"], [1, "title", "is-3"], ["src", "https://media.istockphoto.com/id/171257665/pt/foto/triste-panda-gigante-no-jardim-zool%C3%B3gico.jpg?s=1024x1024&w=is&k=20&c=T_puC86XIm2yD56s0g6eramzrPV6Acy808ezGkeI_kI="]], template: function NotFoundComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
    \u0275\u0275text(2, "panda not found");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 2);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n.center[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: center;\n}\nh1[_ngcontent-%COMP%] {\n  color: aliceblue;\n}\ndiv[_ngcontent-%COMP%] {\n  margin: 0rem 4rem 1rem 4rem;\n}\n/*# sourceMappingURL=not-found.component.css.map */"] });
var NotFoundComponent = _NotFoundComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/shared/not-found/not-found.component.ts", lineNumber: 8 });
})();

// src/app/shared/special-message/special-message.component.ts
var _SpecialMessageComponent = class _SpecialMessageComponent {
};
_SpecialMessageComponent.\u0275fac = function SpecialMessageComponent_Factory(t) {
  return new (t || _SpecialMessageComponent)();
};
_SpecialMessageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecialMessageComponent, selectors: [["app-special-message"]], inputs: { message: "message" }, decls: 3, vars: 1, consts: [[1, "marquee"]], template: function SpecialMessageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.message);
  }
}, styles: ["\n\n.marquee[_ngcontent-%COMP%] {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n  padding: 0rem 1rem 1rem 1rem;\n}\n.marquee[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: calc(100% + 1rem);\n  padding-right: 1rem;\n  animation: _ngcontent-%COMP%_marquee 20s linear infinite;\n  text-shadow: 1px 1px #000;\n  color: rgb(246, 255, 198);\n  font-weight: bold;\n}\n@keyframes _ngcontent-%COMP%_marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n/*# sourceMappingURL=special-message.component.css.map */"] });
var SpecialMessageComponent = _SpecialMessageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecialMessageComponent, { className: "SpecialMessageComponent", filePath: "src/app/shared/special-message/special-message.component.ts", lineNumber: 8 });
})();

// src/app/shared/shared.module.ts
var _SharedModule = class _SharedModule {
};
_SharedModule.\u0275fac = function SharedModule_Factory(t) {
  return new (t || _SharedModule)();
};
_SharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
_SharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  RouterModule
  // UserAreaComponent has router links!
] });
var SharedModule = _SharedModule;

export {
  NotFoundComponent,
  environment,
  SpecialMessageComponent,
  HeaderComponent,
  FooterComponent,
  ToastyNotificationComponent,
  UserAreaComponent,
  SharedModule
};
//# sourceMappingURL=chunk-32RBURP6.js.map
