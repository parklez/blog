import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Project, Projects } from '../models/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  public projectList = new BehaviorSubject<Projects>({ results: [], total: 0, page: 0 });

  getProjectListener() {
    return this.projectList.asObservable();
  }

  public fetchProjects(page: number = 0): Observable<Projects> {
    if (environment?.static) {
      return this.http.get<Projects>(`./assets/projects-${page}.json`).pipe(
        map((response) => {
          this.projectList.next(response);
          return response;
        })
      );
    }

    return this.http.get<Projects>('./api/projects', {
      params: new HttpParams().set('page', page)
    }).pipe(
      map((response) => {
        this.projectList.next(response);
        return response;
      }));
  }

  public createProject(title: string, description: string, thumbnail: string, url: string): Observable<Project> {
    return this.http.post<Project>(
      './api/projects',
      { title, description, thumbnail, url }
    ).pipe(
      map((response) => {
        const c = this.projectList.value
        c.results.unshift(response)
        const r = { results: c.results, total: c.total, page: c.page }
        this.projectList.next(r);
        return response;
      }));
  }

  public updateProject(id: string, project: Project): Observable<{ acknowledged: boolean, modifiedCount: number }> {
    return this.http.put<{ acknowledged: boolean, modifiedCount: number }>(
      './api/projects/' + id,
      { title: project.title, description: project.description }
    )
  }

  public deleteProject(id: string): Observable<{ acknowledged: boolean, deletedCount: number }> {
    return this.http.delete<{ acknowledged: boolean, deletedCount: number }>(
      './api/projects/' + id
    );
  }

  public getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`./api/projects/${id}`);
  }
}
