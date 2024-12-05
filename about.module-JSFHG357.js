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
} from "./chunk-E5V2QDAB.js";

// src/app/about/about-home/about-home.component.ts
var AboutHomeComponent = class _AboutHomeComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function AboutHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutHomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutHomeComponent, selectors: [["app-about-home"]], standalone: false, decls: 2, vars: 0, template: function AboutHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "about-home works!");
        \u0275\u0275elementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutHomeComponent, { className: "AboutHomeComponent", filePath: "src/app/about/about-home/about-home.component.ts", lineNumber: 9 });
})();

// src/app/about/about-routing.module.ts
var routes = [
  {
    path: "",
    component: AboutHomeComponent
  }
];
var AboutRoutingModule = class _AboutRoutingModule {
  static {
    this.\u0275fac = function AboutRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/about/about.module.ts
var AboutModule = class _AboutModule {
  static {
    this.\u0275fac = function AboutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      AboutRoutingModule
    ] });
  }
};
export {
  AboutModule
};
//# sourceMappingURL=about.module-JSFHG357.js.map
