import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service'
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  retrievedPosts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getSomePosts().subscribe((posts: Post[]) => {
      this.retrievedPosts = posts;
    })
  }

}
