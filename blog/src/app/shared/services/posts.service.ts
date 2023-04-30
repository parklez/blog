import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Posts, Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public getSomePosts(page: number = 0): Observable<Posts> {
    return this.http.get<Posts>('./api/posts', {
      params: new HttpParams().set('page', page)
    });
  }

  public createPost(title: string, content: string): Observable<Post> {
    return this.http.post<Post>(
      './api/posts',
      { title, content },
      // TODO: Add http interceptor to add authentication header!
      {
        headers: {
          authorization:
            `Bearer <>`,
        },
      }
    );
  }
}
