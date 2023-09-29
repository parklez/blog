import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Posts, Post } from '../models/post';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public postList = new BehaviorSubject<Posts>({ results: [], total: 0, page: 0 });

  getPostsListener() {
    return this.postList.asObservable();
  }

  public fetchPosts(page: number = 0): Observable<Posts> {
    return this.http.get<Posts>('./api/posts', {
      params: new HttpParams().set('page', page)
    }).pipe(
      map((response) => {
        this.postList.next(response);
        return response;
      }));
  }

  public createPost(title: string, content: string): Observable<Post> {
    return this.http.post<Post>(
      './api/posts',
      { title, content }
    ).pipe(
      map((response) => {
        const c = this.postList.value
        c.results.unshift(response)
        const r = { results: c.results, total: c.total, page: c.page }
        this.postList.next(r);
        return response;
      }));
  }

  public updatePost(id: string, post: Post): Observable<{ acknowledged: boolean, modifiedCount: number }> {
    return this.http.put<{ acknowledged: boolean, modifiedCount: number }>(
      './api/posts/' + id,
      { title: post.title, content: post.content }
    )
  }

  public deletePost(id: string): Observable<{ acknowledged: boolean, deletedCount: number }> {
    return this.http.delete<{ acknowledged: boolean, deletedCount: number }>(
      './api/posts/' + id
    );
  }

}
