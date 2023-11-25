import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/models/project';
import { ProjectsService } from '../../shared/services/projects.service';
import { ToastyService } from 'src/app/shared/services/toasty.service';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css'],
})
export class ProjectsHomeComponent implements OnInit {
  // An array, containing Project arrays.
  projects: Project[][] = [];

  constructor(
    private projservice: ProjectsService,
    private toast: ToastyService
  ) {}

  ngOnInit(): void {
    this.projservice.getSomePosts().subscribe({
      next: (incomingProjects: Project[]) => {
        this.projects = this.sliceIntoChunks(incomingProjects);
      },
      error: (error) => {
        console.log(error); // Create toasty!
        this.toast.pushNewToasty(
          'Oops! - Looks like panda couldnt get any projects -- ' +
            error.message,
          'is-light is-danger'
        );
      },
    });
  }

  // I'm attempting to create a new column, every 3 "Project"s,
  // So I'll be splitting into arrays of 3 of them.
  sliceIntoChunks(array: Project[], size = 3): Project[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      result.push(chunk);
    }
    return result;
  }
}
