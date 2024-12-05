import {
  NotFoundComponent,
  SharedModule,
  environment
} from "./chunk-GFOHXGKE.js";
import {
  ToastyService
} from "./chunk-IQUIHAZP.js";
import {
  BehaviorSubject,
  CommonModule,
  HttpClient,
  HttpParams,
  NgForOf,
  NgIf,
  RouterModule,
  map,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-E5V2QDAB.js";

// src/app/shared/services/projects.service.ts
var ProjectsService = class _ProjectsService {
  constructor(http) {
    this.http = http;
    this.projectList = new BehaviorSubject({ results: [], total: 0, page: 0 });
  }
  getProjectListener() {
    return this.projectList.asObservable();
  }
  fetchProjects(page = 0) {
    if (environment?.static) {
      return this.http.get(`./assets/projects-${page}.json`).pipe(map((response) => {
        this.projectList.next(response);
        return response;
      }));
    }
    return this.http.get("./api/projects", {
      params: new HttpParams().set("page", page)
    }).pipe(map((response) => {
      this.projectList.next(response);
      return response;
    }));
  }
  createProject(title, description, thumbnail, url) {
    return this.http.post("./api/projects", { title, description, thumbnail, url }).pipe(map((response) => {
      const c = this.projectList.value;
      c.results.unshift(response);
      const r = { results: c.results, total: c.total, page: c.page };
      this.projectList.next(r);
      return response;
    }));
  }
  updateProject(id, project) {
    return this.http.put("./api/projects/" + id, { title: project.title, description: project.description });
  }
  deleteProject(id) {
    return this.http.delete("./api/projects/" + id);
  }
  getProject(id) {
    return this.http.get(`./api/projects/${id}`);
  }
  static {
    this.\u0275fac = function ProjectsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectsService, factory: _ProjectsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/projects/project-template/project-template.component.ts
var ProjectTemplateComponent = class _ProjectTemplateComponent {
  constructor() {
    this.project = {
      _id: "",
      title: "",
      category: "Other",
      thumbnail: "assets/thumbs/640x360.png",
      description: "",
      published: /* @__PURE__ */ new Date(),
      hidden: false,
      link: ""
    };
  }
  ngOnInit() {
    const category = this.project.category;
    if (category) {
      this.project.category = category[0].toUpperCase() + category.slice(1);
    }
  }
  getCategory() {
    switch (this.project.category.toLowerCase()) {
      case "game":
        return "Game \u{1F3AE}";
      case "music":
        return "Music \u{1F3A7}";
      case "art":
        return "Art \u{1F3A8}";
      case "software":
        return "Software \u{1F4BB}";
      case "tool":
        return "Tool \u{1F6E0}\uFE0F";
      default:
        return "Other";
    }
  }
  getColor() {
    switch (this.project.category.toLowerCase()) {
      case "game":
        return "#aaff71";
      case "music":
        return "#baf5ff";
      case "art":
        return "#ffbaba";
      case "software":
        return "#ffe8bc";
      case "tool":
        return "#ffffff";
      default:
        return "orange";
    }
  }
  static {
    this.\u0275fac = function ProjectTemplateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectTemplateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectTemplateComponent, selectors: [["app-project-template"]], inputs: { project: "project" }, standalone: false, decls: 8, vars: 6, consts: [["target", "_blank", 1, "box", 3, "href"], ["id", "title", 1, "title", "is-6"], [1, "image", "is-16by9"], ["id", "corner"], [3, "src"]], template: function ProjectTemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "article")(1, "a", 0)(2, "span", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "figure", 2)(5, "span", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "img", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275propertyInterpolate("href", ctx.project.link, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.project.title);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background-color", ctx.getColor());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.getCategory(), " ");
        \u0275\u0275advance();
        \u0275\u0275propertyInterpolate("src", ctx.project.thumbnail, \u0275\u0275sanitizeUrl);
      }
    }, styles: ["\n\na.box[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  padding-top: 0.5rem;\n}\narticle[_ngcontent-%COMP%] {\n  position: relative;\n}\na.box[_ngcontent-%COMP%]:hover, \na.box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0.5em 1em -0.125em rgb(202 236 174 / 10%), 0 0 0 1px #b6ff79;\n}\n#corner[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  color: #4a4a4a;\n  z-index: 1;\n  text-align: center;\n  bottom: 0%;\n  right: 0%;\n  padding: 0rem 0.5rem;\n  border-radius: 6px;\n}\n#title[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.711);\n  padding: 0rem;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=project-template.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectTemplateComponent, { className: "ProjectTemplateComponent", filePath: "src/app/projects/project-template/project-template.component.ts", lineNumber: 11 });
})();

// src/app/projects/projects-home/projects-home.component.ts
function ProjectsHomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading, please wait!");
    \u0275\u0275elementEnd();
  }
}
function ProjectsHomeComponent_ng_container_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-project-template", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("project", project_r1);
  }
}
function ProjectsHomeComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275template(2, ProjectsHomeComponent_ng_container_15_div_2_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.projects);
  }
}
function ProjectsHomeComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-not-found");
    \u0275\u0275elementEnd();
  }
}
var ProjectsHomeComponent = class _ProjectsHomeComponent {
  constructor(projservice, toast) {
    this.projservice = projservice;
    this.toast = toast;
    this.retrievedProjects = {
      results: [],
      total: 0,
      page: 0
    };
    this.projects = [];
    this.success = true;
    this.loading = false;
    this.viewAsGrid = true;
    this.itemsPerPage = 10;
    this.next = false;
    this.previous = false;
  }
  ngOnInit() {
    this.getProjects();
    this.projectListener = this.projservice.getProjectListener().subscribe({
      next: (projects) => {
        this.retrievedProjects = projects;
        this.projects = projects.results;
      }
    });
  }
  getProjects(page = 0) {
    this.projservice.fetchProjects(page).subscribe({
      next: (projects) => {
        this.next = projects.total > this.itemsPerPage ? page * this.itemsPerPage + projects.results.length < projects.total : false;
        this.previous = page * this.itemsPerPage + projects.results.length - this.itemsPerPage > 0 ? true : false;
        document.documentElement.scrollTop = 0;
      },
      error: (error) => {
        this.toast.pushNewToasty("Oops! - Looks like panda couldnt get any projects -- " + error.message, "is-light is-danger");
      }
    });
  }
  ngOnDestroy() {
    this.projectListener.unsubscribe();
  }
  sortByDate(ascending) {
    if (ascending) {
      this.projects = this.retrievedProjects.results.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
    } else {
      this.retrievedProjects.results.sort((a, b) => new Date(a.published).getTime() - new Date(b.published).getTime());
    }
  }
  setViewAsGrid(bool) {
    this.viewAsGrid = bool;
  }
  static {
    this.\u0275fac = function ProjectsHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsHomeComponent)(\u0275\u0275directiveInject(ProjectsService), \u0275\u0275directiveInject(ToastyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsHomeComponent, selectors: [["app-projects-home"]], standalone: false, decls: 17, vars: 3, consts: [["class", "box", 4, "ngIf"], ["id", "filters", 1, "box"], [3, "click"], [4, "ngIf"], [1, "box"], [1, "grid", "is-col-min-10"], ["class", "cell", 4, "ngFor", "ngForOf"], [1, "cell"], [3, "project"]], template: function ProjectsHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectsHomeComponent_div_0_Template, 2, 0, "div", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275text(2, " View: [");
        \u0275\u0275elementStart(3, "a", 2);
        \u0275\u0275listener("click", function ProjectsHomeComponent_Template_a_click_3_listener() {
          return ctx.setViewAsGrid(true);
        });
        \u0275\u0275text(4, "Grid");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, "] [");
        \u0275\u0275elementStart(6, "a", 2);
        \u0275\u0275listener("click", function ProjectsHomeComponent_Template_a_click_6_listener() {
          return ctx.setViewAsGrid(false);
        });
        \u0275\u0275text(7, "List");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "] - Sorting: [");
        \u0275\u0275elementStart(9, "a", 2);
        \u0275\u0275listener("click", function ProjectsHomeComponent_Template_a_click_9_listener() {
          return ctx.sortByDate(true);
        });
        \u0275\u0275text(10, "Newer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "] [");
        \u0275\u0275elementStart(12, "a", 2);
        \u0275\u0275listener("click", function ProjectsHomeComponent_Template_a_click_12_listener() {
          return ctx.sortByDate(false);
        });
        \u0275\u0275text(13, "Older");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "]\n");
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, ProjectsHomeComponent_ng_container_15_Template, 3, 1, "ng-container", 3)(16, ProjectsHomeComponent_div_16_Template, 2, 0, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngIf", ctx.projects.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.success);
      }
    }, dependencies: [NgForOf, NgIf, NotFoundComponent, ProjectTemplateComponent], styles: ["\n\n#filters[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.338);\n}\n/*# sourceMappingURL=projects-home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsHomeComponent, { className: "ProjectsHomeComponent", filePath: "src/app/projects/projects-home/projects-home.component.ts", lineNumber: 13 });
})();

// src/app/projects/projects-routing.module.ts
var routes = [
  {
    path: "",
    component: ProjectsHomeComponent
  }
];
var ProjectsRoutingModule = class _ProjectsRoutingModule {
  static {
    this.\u0275fac = function ProjectsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/projects/projects.module.ts
var ProjectsModule = class _ProjectsModule {
  static {
    this.\u0275fac = function ProjectsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ProjectsRoutingModule,
      SharedModule
    ] });
  }
};
export {
  ProjectsModule
};
//# sourceMappingURL=projects.module-P44LBHM2.js.map
