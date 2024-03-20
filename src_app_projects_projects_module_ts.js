"use strict";
(self["webpackChunkmy_bloog"] = self["webpackChunkmy_bloog"] || []).push([["src_app_projects_projects_module_ts"],{

/***/ 8622:
/*!*************************************************************************!*\
  !*** ./src/app/projects/project-template/project-template.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectTemplateComponent: () => (/* binding */ ProjectTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ProjectTemplateComponent {
  constructor() {
    this.project = {
      _id: '',
      title: '',
      category: 'Other',
      thumbnail: 'assets/640x360.png',
      description: '',
      published: new Date(),
      hidden: false,
      link: ''
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
      case 'game':
        return 'Game 🎮';
      case 'music':
        return 'Music 🎧';
      case 'art':
        return 'Art 🎨';
      case 'software':
        return 'Software 💻';
      case 'tool':
        return 'Tool 🛠️';
      default:
        return 'Other';
    }
  }
  getColor() {
    switch (this.project.category.toLowerCase()) {
      case 'game':
        return '#aaff71';
      case 'music':
        return '#baf5ff';
      case 'art':
        return '#ffbaba';
      case 'software':
        return '#ffe8bc';
      case 'tool':
        return '#ffffff';
      default:
        return 'orange';
    }
  }
  static #_ = this.ɵfac = function ProjectTemplateComponent_Factory(t) {
    return new (t || ProjectTemplateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProjectTemplateComponent,
    selectors: [["app-project-template"]],
    inputs: {
      project: "project"
    },
    decls: 6,
    vars: 5,
    consts: [["target", "_blank", 1, "box", 3, "href"], [1, "image", "is-16by9"], ["id", "corner"], [3, "src"]],
    template: function ProjectTemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article")(1, "a", 0)(2, "figure", 1)(3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.project.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.getColor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getCategory(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.project.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    styles: ["a.box[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n}\n\narticle[_ngcontent-%COMP%] {\n    position: relative;\n}\n\na.box[_ngcontent-%COMP%]:hover, a.box[_ngcontent-%COMP%]:focus {\n    box-shadow: 0 0.5em 1em -0.125em rgb(202 236 174 / 10%), 0 0 0 1px rgb(202, 236, 174);\n}\n\n#corner[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    color: #4a4a4a;\n    z-index: 1;\n    text-align: center;\n    bottom: 0%;\n    right: 0%;\n    padding: 0rem 0.5rem;\n    border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdC10ZW1wbGF0ZS9wcm9qZWN0LXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxRkFBcUY7QUFDekY7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImEuYm94IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xufVxuXG5hcnRpY2xlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmEuYm94OmhvdmVyLCBhLmJveDpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwLjVlbSAxZW0gLTAuMTI1ZW0gcmdiKDIwMiAyMzYgMTc0IC8gMTAlKSwgMCAwIDAgMXB4IHJnYigyMDIsIDIzNiwgMTc0KTtcbn1cblxuI2Nvcm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvdHRvbTogMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIHBhZGRpbmc6IDByZW0gMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2294:
/*!*******************************************************************!*\
  !*** ./src/app/projects/projects-home/projects-home.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsHomeComponent: () => (/* binding */ ProjectsHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/projects.service */ 9064);
/* harmony import */ var src_app_shared_services_toasty_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/toasty.service */ 8514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/not-found/not-found.component */ 8945);
/* harmony import */ var _project_template_project_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-template/project-template.component */ 8622);






function ProjectsHomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Loading, please wait!\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProjectsHomeComponent_ng_container_1_ng_container_12_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-project-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const project_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("project", project_r8);
  }
}
function ProjectsHomeComponent_ng_container_1_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProjectsHomeComponent_ng_container_1_ng_container_12_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowOfProjects_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", rowOfProjects_r6);
  }
}
function ProjectsHomeComponent_ng_container_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProjectsHomeComponent_ng_container_1_ng_container_12_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.projects);
  }
}
function ProjectsHomeComponent_ng_container_1_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-project-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const project_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("project", project_r10);
  }
}
function ProjectsHomeComponent_ng_container_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProjectsHomeComponent_ng_container_1_ng_container_13_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.retrievedProjects.results);
  }
}
function ProjectsHomeComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " View: [");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsHomeComponent_ng_container_1_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.toggleView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "] - Sorting: [");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsHomeComponent_ng_container_1_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.sortByDate(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Newer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "] [");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsHomeComponent_ng_container_1_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.sortByDate(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Older");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProjectsHomeComponent_ng_container_1_ng_container_12_Template, 2, 1, "ng-container", 1)(13, ProjectsHomeComponent_ng_container_1_ng_container_13_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.viewAsGrid ? "List" : "Grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.viewAsGrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.viewAsGrid);
  }
}
function ProjectsHomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class ProjectsHomeComponent {
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
      next: projects => {
        this.retrievedProjects = projects;
        this.projects = this.sliceIntoChunks(projects.results);
      }
    });
  }
  getProjects(page = 0) {
    this.projservice.fetchProjects(page).subscribe({
      next: projects => {
        this.next = projects.total > this.itemsPerPage ? page * this.itemsPerPage + projects.results.length < projects.total : false;
        this.previous = page * this.itemsPerPage + projects.results.length - this.itemsPerPage > 0 ? true : false;
        document.documentElement.scrollTop = 0;
      },
      error: error => {
        this.toast.pushNewToasty('Oops! - Looks like panda couldnt get any projects -- ' + error.message, 'is-light is-danger');
      }
    });
  }
  ngOnDestroy() {
    this.projectListener.unsubscribe();
  }
  // I'm attempting to create a new column, every 3 "Project"s,
  // So I'll be splitting into arrays of 3 of them.
  sliceIntoChunks(array, size = 3) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      result.push(chunk);
    }
    return result;
  }
  sortByDate(ascending) {
    if (ascending) {
      this.projects = this.sliceIntoChunks(this.retrievedProjects.results.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()));
    } else {
      this.projects = this.sliceIntoChunks(this.retrievedProjects.results.sort((a, b) => new Date(a.published).getTime() - new Date(b.published).getTime()));
    }
  }
  toggleView() {
    this.viewAsGrid = !this.viewAsGrid;
  }
  static #_ = this.ɵfac = function ProjectsHomeComponent_Factory(t) {
    return new (t || ProjectsHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_toasty_service__WEBPACK_IMPORTED_MODULE_1__.ToastyService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProjectsHomeComponent,
    selectors: [["app-projects-home"]],
    decls: 3,
    vars: 3,
    consts: [["class", "box", 4, "ngIf"], [4, "ngIf"], [1, "box"], ["id", "filters", 1, "box"], [3, "click"], ["class", "columns is-variable is-1", 4, "ngFor", "ngForOf"], [1, "columns", "is-variable", "is-1"], [4, "ngFor", "ngForOf"], [1, "column", "is-one-third", 3, "project"], [1, "column", 3, "project"]],
    template: function ProjectsHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ProjectsHomeComponent_div_0_Template, 2, 0, "div", 0)(1, ProjectsHomeComponent_ng_container_1_Template, 14, 3, "ng-container", 1)(2, ProjectsHomeComponent_div_2_Template, 2, 0, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.projects.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.success);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent, _project_template_project_template_component__WEBPACK_IMPORTED_MODULE_3__.ProjectTemplateComponent],
    styles: ["#filters[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.338);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMtaG9tZS9wcm9qZWN0cy1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7QUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyIjZmlsdGVycyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzOCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1491:
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsRoutingModule: () => (/* binding */ ProjectsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _projects_home_projects_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-home/projects-home.component */ 2294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _projects_home_projects_home_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsHomeComponent
}];
class ProjectsRoutingModule {
  static #_ = this.ɵfac = function ProjectsRoutingModule_Factory(t) {
    return new (t || ProjectsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ProjectsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9334:
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsModule: () => (/* binding */ ProjectsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-routing.module */ 1491);
/* harmony import */ var _projects_home_projects_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-home/projects-home.component */ 2294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _project_template_project_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-template/project-template.component */ 8622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);






class ProjectsModule {
  static #_ = this.ɵfac = function ProjectsModule_Factory(t) {
    return new (t || ProjectsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ProjectsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProjectsModule, {
    declarations: [_projects_home_projects_home_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsHomeComponent, _project_template_project_template_component__WEBPACK_IMPORTED_MODULE_3__.ProjectTemplateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 9064:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/projects.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsService: () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class ProjectsService {
  constructor(http) {
    this.http = http;
    this.projectList = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
      results: [],
      total: 0,
      page: 0
    });
  }
  getProjectListener() {
    return this.projectList.asObservable();
  }
  fetchProjects(page = 0) {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment?.static) {
      return this.http.get(`./assets/projects-${page}.json`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
        this.projectList.next(response);
        return response;
      }));
    }
    return this.http.get('./api/projects', {
      params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('page', page)
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      this.projectList.next(response);
      return response;
    }));
  }
  createProject(title, description, thumbnail, url) {
    return this.http.post('./api/projects', {
      title,
      description,
      thumbnail,
      url
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      const c = this.projectList.value;
      c.results.unshift(response);
      const r = {
        results: c.results,
        total: c.total,
        page: c.page
      };
      this.projectList.next(r);
      return response;
    }));
  }
  updateProject(id, project) {
    return this.http.put('./api/projects/' + id, {
      title: project.title,
      description: project.description
    });
  }
  deleteProject(id) {
    return this.http.delete('./api/projects/' + id);
  }
  getProject(id) {
    return this.http.get(`./api/projects/${id}`);
  }
  static #_ = this.ɵfac = function ProjectsService_Factory(t) {
    return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ProjectsService,
    factory: ProjectsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_projects_projects_module_ts.js.map