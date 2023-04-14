import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public getSomePosts(): Observable<Post[]> {
    return this.http.get<Post[]>('./api/posts');
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
