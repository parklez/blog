import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Posts } from '../../shared/models/post';
import { ToastyService } from 'src/app/shared/services/toasty.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  retrievedPosts: Posts = {
    results: [],
    total: 0,
    page: 0,
  };

  itemsPerPage = 10;
  next: boolean = false;
  previous: boolean = false;

  isAuthenticated: boolean = false;
  private authListener!: Subscription;
  private postListener!: Subscription;

  isEditorOpen: boolean = false;

  constructor(
    private postsService: PostsService,
    private toast: ToastyService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getPosts();

    this.postListener = this.postsService.getPostsListener().subscribe({
      next: (posts) => {
        this.retrievedPosts = posts;
      }
    })

    this.authListener = this.auth.getAuthListener().subscribe({
      next: (user) => {
        this.isAuthenticated = user.isAuthenticated;
      }
    })
  }

  ngOnDestroy(): void {
    this.authListener.unsubscribe();
    this.postListener.unsubscribe();
  }

  toggleEditor() {
    this.isEditorOpen = !this.isEditorOpen;
  }

  getPosts(page: number = 0): void {
    this.postsService.fetchPosts(page).subscribe({
      next: (posts: Posts) => {
        this.next = posts.total > this.itemsPerPage ? (page * this.itemsPerPage) + posts.results.length < posts.total : false;
        this.previous = ((page * this.itemsPerPage) + posts.results.length) - this.itemsPerPage > 0 ? true : false;
        document.documentElement.scrollTop = 0;
      },
      error: (error) => {
        console.log(error); // Create toasty!
        this.toast.pushNewToasty(
          'Oops! - Looks like panda couldnt get any posts -- ' + error.message,
          'is-light is-danger'
        );
      },
    });
  }

  goToPrevious(): void {
    this.getPosts(this.retrievedPosts.page - 1)
  }

  goToNext(): void {
    this.getPosts(this.retrievedPosts.page + 1)
  }

}
