import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectTemplateComponent } from './project-template/project-template.component';


@NgModule({
  declarations: [
    ProjectsHomeComponent,
    ProjectTemplateComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
