import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Posts } from '../../shared/models/post';
import { ToastyService } from 'src/app/shared/services/toasty.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Subscription } from 'rxjs';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

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

  isEditorOpen: boolean = false;

  postForm = new UntypedFormGroup({
    "title": new UntypedFormControl(null, Validators.required),
    "content": new UntypedFormControl(null, Validators.required)
  })

  constructor(
    private postsService: PostsService,
    private toast: ToastyService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getPosts();

    this.authListener = this.auth.getAuthListener().subscribe({
      next: (user) => {
        this.isAuthenticated = user.isAuthenticated;
      }
    })
  }

  ngOnDestroy(): void {
    this.authListener.unsubscribe();
  }

  toggleEditor() {
    this.isEditorOpen = !this.isEditorOpen;
  }

  onSubmit(): void {
    console.log(this.postForm.value)
    this.postsService.createPost(this.postForm.value.title, this.postForm.value.content).subscribe({
      next: (post) => {
        this.retrievedPosts.results.unshift(post);
      },
      error: (error) => {
        console.log(error); // Create toasty!
        this.toast.pushNewToasty(
          error.message,
          'danger'
        );
      },
    })
    this.postForm.reset();
  }

  getPosts(page: number = 0): void {
    this.postsService.getSomePosts(page).subscribe({
      next: (posts: Posts) => {
        this.retrievedPosts = posts;
        this.next = posts.total > this.itemsPerPage ? (page * this.itemsPerPage) + posts.results.length < posts.total : false;
        this.previous = ((page * this.itemsPerPage) + posts.results.length) - this.itemsPerPage > 0 ? true : false;
        document.documentElement.scrollTop = 0;
      },
      error: (error) => {
        console.log(error); // Create toasty!
        this.toast.pushNewToasty(
          'Oops! - Looks like panda couldnt get any posts -- ' + error.message,
          'danger'
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
