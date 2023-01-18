import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { PostComponent } from '../shared/post/post.component';

const routes: Routes = [
  {
    path: '', component: ProjectsHomeComponent
  },
  {
    path: ':id', component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
