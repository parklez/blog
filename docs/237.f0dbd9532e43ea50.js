"use strict";(self.webpackChunkmy_bloog=self.webpackChunkmy_bloog||[]).push([[237],{6237:(O,c,i)=>{i.r(c),i.d(c,{HomeModule:()=>_});var r=i(6814),l=i(3377),t=i(5849),p=i(9065),d=i(8514),u=i(9214),g=i(1074),m=i(4089);function h(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",12)(1,"a",13),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.toggleEditor())}),t._uU(2," [ Toggle Editor ] "),t.qZA()()}}function f(o,a){1&o&&(t.TgZ(0,"div",14),t._UZ(1,"app-post-editor"),t.qZA())}function v(o,a){if(1&o&&(t.TgZ(0,"div",14),t._UZ(1,"app-post",15),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("post",e)}}function P(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"nav",16)(1,"a",17),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.previous&&s.goToPrevious())}),t._uU(2,"Previous"),t.qZA(),t.TgZ(3,"a",18),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.next&&s.goToNext())}),t._uU(4,"Next page"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.uIk("disabled",e.previous?null:e.previous),t.xp6(2),t.uIk("disabled",e.next?null:e.next)}}const b=[{path:"",component:(()=>{class o{constructor(e,n,s){this.postsService=e,this.toast=n,this.auth=s,this.retrievedPosts={results:[],total:0,page:0},this.itemsPerPage=10,this.next=!1,this.previous=!1,this.isAuthenticated=!1,this.isEditorOpen=!1}ngOnInit(){this.getPosts(),this.postListener=this.postsService.getPostsListener().subscribe({next:e=>{this.retrievedPosts=e}}),this.authListener=this.auth.getAuthListener().subscribe({next:e=>{this.isAuthenticated=e.isAuthenticated}})}ngOnDestroy(){this.authListener.unsubscribe(),this.postListener.unsubscribe()}toggleEditor(){this.isEditorOpen=!this.isEditorOpen}getPosts(e=0){this.postsService.fetchPosts(e).subscribe({next:n=>{this.next=n.total>this.itemsPerPage&&e*this.itemsPerPage+n.results.length<n.total,this.previous=e*this.itemsPerPage+n.results.length-this.itemsPerPage>0,document.documentElement.scrollTop=0},error:n=>{console.log(n),this.toast.pushNewToasty("Oops! - Looks like panda couldnt get any posts -- "+n.message,"danger")}})}goToPrevious(){this.getPosts(this.retrievedPosts.page-1)}goToNext(){this.getPosts(this.retrievedPosts.page+1)}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(p.P),t.Y36(d.k),t.Y36(u.$))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home-page"]],decls:16,vars:4,consts:[["id","content"],[1,"columns",2,"min-height","35rem"],["id","page-content",1,"column","is-four-fifths"],["id","create-content","class","box",4,"ngIf"],["class","box",4,"ngIf"],["class","box",4,"ngFor","ngForOf"],["class","pagination",4,"ngIf"],["id","side-panel",1,"column","is-one-fifth"],["id","about-panel",1,"box"],[1,"title","is-4"],["id","generic",1,"box"],[1,"title","is-6"],["id","create-content",1,"box"],[3,"click"],[1,"box"],[3,"post"],[1,"pagination"],[1,"pagination-previous",3,"click"],[1,"pagination-next",3,"click"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,h,3,0,"div",3)(4,f,2,0,"div",4)(5,v,2,1,"div",5)(6,P,5,2,"nav",6),t.qZA(),t.TgZ(7,"div",7)(8,"div",8)(9,"h1",9),t._uU(10,"Side Panel"),t.qZA(),t._uU(11," Here's supposed to have some brief text on what this section is all about. Below this I should add maybe links or cool information "),t.qZA(),t.TgZ(12,"div",10)(13,"h1",11),t._uU(14,"Lorem Ipsum"),t.qZA(),t._uU(15," Lorem ipsum dolor sit amet "),t.qZA()()()()),2&n&&(t.xp6(3),t.Q6J("ngIf",s.isAuthenticated),t.xp6(1),t.Q6J("ngIf",s.isEditorOpen),t.xp6(1),t.Q6J("ngForOf",s.retrievedPosts.results),t.xp6(1),t.Q6J("ngIf",s.retrievedPosts.results.length))},dependencies:[r.sg,r.O5,g.A,m.O],styles:[".box[_ngcontent-%COMP%]{color:#fff;background-color:#0009;-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px);border-radius:6px}#about-panel[_ngcontent-%COMP%]{background-color:#a3a3c666;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:6px}#about-panel[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#000;padding-bottom:.75rem}#generic[_ngcontent-%COMP%]{background-color:#fff8d3b3;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#000}#generic[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#000;padding-bottom:.75rem}#create-content[_ngcontent-%COMP%]{margin-bottom:1rem}nav[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{background-color:#fff}.pagination-previous[disabled][_ngcontent-%COMP%], .pagination-next[disabled][_ngcontent-%COMP%], .pagination-link[disabled][_ngcontent-%COMP%]{opacity:.8}"]})}return o})()}];let x=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(b),l.Bz]})}return o})();var C=i(6208);let _=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[r.ez,x,C.m]})}return o})()}}]);