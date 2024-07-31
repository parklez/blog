import {
  CommonModule,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-RB76LCDH.js";

// src/app/about/about-home/about-home.component.ts
var _AboutHomeComponent = class _AboutHomeComponent {
  constructor() {
  }
  ngOnInit() {
  }
};
_AboutHomeComponent.\u0275fac = function AboutHomeComponent_Factory(t) {
  return new (t || _AboutHomeComponent)();
};
_AboutHomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutHomeComponent, selectors: [["app-about-home"]], decls: 2, vars: 0, template: function AboutHomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "about-home works!");
    \u0275\u0275elementEnd();
  }
} });
var AboutHomeComponent = _AboutHomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutHomeComponent, { className: "AboutHomeComponent", filePath: "src/app/about/about-home/about-home.component.ts", lineNumber: 8 });
})();

// src/app/about/about-routing.module.ts
var routes = [
  {
    path: "",
    component: AboutHomeComponent
  }
];
var _AboutRoutingModule = class _AboutRoutingModule {
};
_AboutRoutingModule.\u0275fac = function AboutRoutingModule_Factory(t) {
  return new (t || _AboutRoutingModule)();
};
_AboutRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutRoutingModule });
_AboutRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var AboutRoutingModule = _AboutRoutingModule;

// src/app/about/about.module.ts
var _AboutModule = class _AboutModule {
};
_AboutModule.\u0275fac = function AboutModule_Factory(t) {
  return new (t || _AboutModule)();
};
_AboutModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutModule });
_AboutModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  AboutRoutingModule
] });
var AboutModule = _AboutModule;
export {
  AboutModule
};
//# sourceMappingURL=about.module-QWQDDXMD.js.map
