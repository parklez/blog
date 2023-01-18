import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Post } from '../../shared/models/post';
import { ToastyService } from 'src/app/shared/services/toasty.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  retrievedPosts: Post[] = [];

  constructor(
    private postsService: PostsService,
    private toast: ToastyService
  ) {}

  ngOnInit(): void {
    this.postsService.getSomePosts().subscribe(
      (posts: Post[]) => {
        this.retrievedPosts = posts;
      },
      (error) => {
        console.log(error); // Create toasty!
        this.toast.pushNewToasty(
          'Oops! - Looks like panda couldnt get any posts -- ' + error.message,
          'danger'
        );
      }
    );
  }
}
