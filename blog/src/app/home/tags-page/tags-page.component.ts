import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsByTag } from 'src/app/shared/models/post';
import { PostsService } from 'src/app/shared/services/posts.service';
import { ToastyService } from 'src/app/shared/services/toasty.service';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrl: './tags-page.component.css'
})
export class TagsPageComponent implements OnInit {

  postsByTag!: PostsByTag
  success: boolean = false
  loading: boolean = true

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private toast: ToastyService,
  ) {}

  ngOnInit(): void {
    const tagName = this.route.snapshot.params.name 
    this.getPostsByTag(tagName);
  }

  getPostsByTag(tagName: string): void {
    this.postsService.fetchPostsByTag(tagName).subscribe({
      next: (result: PostsByTag) => {
        this.postsByTag = result
        document.documentElement.scrollTop = 0;
        this.success = true
        this.loading = false
      },
      error: (error) => {
        console.log(error); // Create toasty!
        this.toast.pushNewToasty(
          'Oops! - Looks like panda couldnt find your tag -- ' + error.message,
          'is-light is-danger'
        );
        this.loading = false
        this.success = false
      },
    });
  }

}
