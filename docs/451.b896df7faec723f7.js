"use strict";(self.webpackChunkmy_bloog=self.webpackChunkmy_bloog||[]).push([[451],{2451:(k,p,i)=>{i.r(p),i.d(p,{HomeModule:()=>r});var d=i(6895),g=i(8250),t=i(8256),u=i(4051),m=i(4956),h=i(7361),f=i(7010),v=i(6526);function P(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"a",13),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.toggleEditor())}),t._uU(2," [ Toggle Editor ] "),t.qZA()()}}function b(n,o){1&n&&(t.TgZ(0,"div",14),t._UZ(1,"app-post-editor"),t.qZA())}function x(n,o){if(1&n&&(t.TgZ(0,"div",14),t._UZ(1,"app-post",15),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("post",e)}}function C(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"nav",16)(1,"a",17),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.previous&&s.goToPrevious())}),t._uU(2,"Previous"),t.qZA(),t.TgZ(3,"a",18),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.next&&s.goToNext())}),t._uU(4,"Next page"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.uIk("disabled",e.previous?null:e.previous),t.xp6(2),t.uIk("disabled",e.next?null:e.next)}}class c{constructor(o,e,l){this.postsService=o,this.toast=e,this.auth=l,this.retrievedPosts={results:[],total:0,page:0},this.itemsPerPage=10,this.next=!1,this.previous=!1,this.isAuthenticated=!1,this.isEditorOpen=!1}ngOnInit(){this.getPosts(),this.postListener=this.postsService.getPostsListener().subscribe({next:o=>{this.retrievedPosts=o}}),this.authListener=this.auth.getAuthListener().subscribe({next:o=>{this.isAuthenticated=o.isAuthenticated}})}ngOnDestroy(){this.authListener.unsubscribe(),this.postListener.unsubscribe()}toggleEditor(){this.isEditorOpen=!this.isEditorOpen}getPosts(o=0){this.postsService.fetchPosts(o).subscribe({next:e=>{this.next=e.total>this.itemsPerPage&&o*this.itemsPerPage+e.results.length<e.total,this.previous=o*this.itemsPerPage+e.results.length-this.itemsPerPage>0,document.documentElement.scrollTop=0},error:e=>{console.log(e),this.toast.pushNewToasty("Oops! - Looks like panda couldnt get any posts -- "+e.message,"danger")}})}goToPrevious(){this.getPosts(this.retrievedPosts.page-1)}goToNext(){this.getPosts(this.retrievedPosts.page+1)}}c.\u0275fac=function(o){return new(o||c)(t.Y36(u.P),t.Y36(m.k),t.Y36(h.$))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-home-page"]],decls:16,vars:4,consts:[["id","content"],[1,"columns",2,"min-height","35rem"],["id","page-content",1,"column","is-four-fifths"],["id","create-content","class","box",4,"ngIf"],["class","box",4,"ngIf"],["class","box",4,"ngFor","ngForOf"],["class","pagination",4,"ngIf"],["id","side-panel",1,"column","is-one-fifth"],["id","about-panel",1,"box"],[1,"title","is-4"],["id","generic",1,"box"],[1,"title","is-6"],["id","create-content",1,"box"],[3,"click"],[1,"box"],[3,"post"],[1,"pagination"],[1,"pagination-previous",3,"click"],[1,"pagination-next",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,P,3,0,"div",3),t.YNc(4,b,2,0,"div",4),t.YNc(5,x,2,1,"div",5),t.YNc(6,C,5,2,"nav",6),t.qZA(),t.TgZ(7,"div",7)(8,"div",8)(9,"h1",9),t._uU(10,"Side Panel"),t.qZA(),t._uU(11," Here's supposed to have some brief text on what this section is all about. Below this I should add maybe links or cool information "),t.qZA(),t.TgZ(12,"div",10)(13,"h1",11),t._uU(14,"Lorem Ipsum"),t.qZA(),t._uU(15," Lorem ipsum dolor sit amet "),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("ngIf",e.isAuthenticated),t.xp6(1),t.Q6J("ngIf",e.isEditorOpen),t.xp6(1),t.Q6J("ngForOf",e.retrievedPosts.results),t.xp6(1),t.Q6J("ngIf",e.retrievedPosts.results.length))},dependencies:[d.sg,d.O5,f.A,v.O],styles:[".box[_ngcontent-%COMP%]{color:#fff;background-color:#0009;-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px);border-radius:6px}#about-panel[_ngcontent-%COMP%]{background-color:#a3a3c666;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:6px}#about-panel[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#000;padding-bottom:.75rem}#generic[_ngcontent-%COMP%]{background-color:#fff8d3b3;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#000}#generic[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#000;padding-bottom:.75rem}#create-content[_ngcontent-%COMP%]{margin-bottom:1rem}nav[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{background-color:#fff}.pagination-previous[disabled][_ngcontent-%COMP%], .pagination-next[disabled][_ngcontent-%COMP%], .pagination-link[disabled][_ngcontent-%COMP%]{opacity:.8}"]});const O=[{path:"",component:c}];class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.Bz.forChild(O),g.Bz]});var _=i(4466);class r{}r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.ez,a,_.m]})}}]);