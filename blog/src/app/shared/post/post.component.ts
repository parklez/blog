import { Component, Input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post: Post = {
    _id: 0,
    userId: 0,
    title: '',
    content: '',
    hidden: false,
    published: new Date()
  };

  constructor() { }

}
