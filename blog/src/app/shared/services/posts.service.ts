import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Posts, Post } from '../models/post';
import { BehaviorSubject, Observable, catchError, of, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import fm from 'front-matter';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public postList = new BehaviorSubject<Posts>({ results: [], total: 0, page: 0 });

  private preloadedPost: Post = {
    _id: '',
    userId: 0,
    title: '',
    content: '',
    hidden: false,
    published: new Date()
  };

  public setPreloadedPost(post: Post) {
    this.preloadedPost = post;
  }

  getPostsListener() {
    return this.postList.asObservable();
  }

  public fetchPosts(page: number = 0): Observable<Posts> {
    if (environment?.static) {
        return this.http.get<Posts>(`./assets/posts-${page}.json`).pipe(
          map((response) => {
            this.postList.next(response);
            return response;
          })
        );
    }

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

  public getPost(id: string): Observable<Post> {
    if (this.preloadedPost._id == id) {
      // https://rxjs.dev/api/index/function/of
      return of(this.preloadedPost);
    }

    if (environment?.static) {
      // TODO: Set up user/repo/branch name instead of hardcoding here
      // TODO: Github Pages doesn't work well with routes,
      // so find a solution like scully to make it work.
      const adress = `https://raw.githubusercontent.com/parklez/blog/master/_posts/${id}`;
      // Adding <string> here does not work! use responseType instead!
      // https://stackoverflow.com/a/49771753
      return this.http.get(adress, { responseType: 'text' }).pipe(
        map((data) => {
          const content = fm(data);
          const filename = id.match(/(\d{2,4}-\d{2}-\d{2})-(.*)/);
          // I'm allowing the string to go through to keep the consistency
          // of Angular's date pipe. If I generate a new Date() object,
          // there's a bug where timezone is applied and posts can change
          // to a day earlier! - Can this be done better in a single line?
          const date = filename?.length ? (filename[1] as unknown as Date): new Date();

          return {
            _id: id,
            userId: 0,
            // The FrontMatterResult "attribute" uses <T> as some kind of generic type that
            // is not quite working here, so I'm casting its type to <any>.
            // https://stackoverflow.com/questions/49622045/in-typescript-what-does-t-mean
            // https://www.totaltypescript.com/concepts/object-is-of-type-unknown
            title: (content.attributes as any).title
              ? (content.attributes as any).title
              : id,
            content: content.body,
            hidden: false,
            published: date,
          };
        }),
        // https://blog.angular-university.io/rxjs-error-handling/
        catchError((error) => {
          return throwError(() => new Error(error.error));
        })
      );
    }

    return this.http.get<Post>(`./api/posts/${id}`);
  }

}
