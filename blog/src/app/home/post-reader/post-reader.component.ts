import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { ToastyService } from '../../shared/services/toasty.service';
import { Post } from '../../shared/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post-reader',
    templateUrl: './post-reader.component.html',
    styleUrl: './post-reader.component.css',
    standalone: false
})
export class PostReaderComponent implements OnInit{

  loading: boolean = true;
  success: boolean = false;

  constructor(
    private postsService: PostsService,
    private toast: ToastyService,
    private route: ActivatedRoute
  ) {}

  post: Post = {
    _id: '',
    userId: 0,
    title: '',
    content: '',
    hidden: false,
    published: new Date()
  };

  ngOnInit(): void {
    // https://angular.io/api/router/ActivatedRouteSnapshot#description
    const postId = this.route.snapshot.params.id;
    document.documentElement.scrollTop = 0;

    if (!postId) {
      this.loading = false
      return;
    }

    this.postsService.getPost(postId).subscribe({
      next: (post: Post) => {
        this.post = post;
        this.success = true;
      },
      error: (error) => {
        console.log(error); // Create toasty!
        this.toast.pushNewToasty(
          'Oops! - Looks like panda couldnt find the post! -- ' + error.message,
          'is-light is-danger'
        );
        this.loading = false;
      },
      complete: () => {
        // This is only called on success, for finite-type subscriptions!
        // For the regular NodeJS complete logic, use finalize within a pipe before subscribing!
        this.loading = false;
      }
    });
  }

  goBack(): void {
    document.documentElement.scrollTop = 0;
    history.back();
  }

}
