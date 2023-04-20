import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Post } from '../../shared/models/post';
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
  retrievedPosts: Post[] = [];

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
    this.postsService.getSomePosts().subscribe({
      next: (posts: Post[]) => {
        this.retrievedPosts = posts;
      },
      error: (error) => {
        console.log(error); // Create toasty!
        this.toast.pushNewToasty(
          'Oops! - Looks like panda couldnt get any posts -- ' + error.message,
          'danger'
        );
      },
    });

    // Is this necessary? Shouldn't the subscriber below get the latest values?
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
        console.log('Post sent successfully!')
        this.retrievedPosts.unshift(post);
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
}
