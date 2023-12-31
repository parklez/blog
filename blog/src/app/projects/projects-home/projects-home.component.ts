import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project, Projects } from '../../shared/models/project';
import { ProjectsService } from '../../shared/services/projects.service';
import { ToastyService } from 'src/app/shared/services/toasty.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css'],
})
export class ProjectsHomeComponent implements OnInit, OnDestroy {
  retrievedProjects: Projects = {
    results: [],
    total: 0,
    page: 0,
  };

  projects: Project[][] = []
  success: boolean = true;
  loading: boolean = false;

  itemsPerPage = 10;
  next: boolean = false;
  previous: boolean = false;

  private projectListener!: Subscription;

  constructor(
    private projservice: ProjectsService,
    private toast: ToastyService
  ) {}

  ngOnInit(): void {
    this.getProjects();

    this.projectListener = this.projservice.getProjectListener().subscribe({
      next: (projects: Projects) => {
        this.retrievedProjects = projects;
        this.projects = this.sliceIntoChunks(projects.results)
      }
    })
  }

  getProjects(page: number = 0): void {
    this.projservice.fetchProjects(page).subscribe({
      next: (projects: Projects) => {
        this.next = projects.total > this.itemsPerPage ? (page * this.itemsPerPage) + projects.results.length < projects.total : false;
        this.previous = ((page * this.itemsPerPage) + projects.results.length) - this.itemsPerPage > 0 ? true : false;
        document.documentElement.scrollTop = 0;
      },
      error: (error) => {
        this.toast.pushNewToasty(
          'Oops! - Looks like panda couldnt get any projects -- ' + error.message,
          'is-light is-danger'
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.projectListener.unsubscribe();
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
