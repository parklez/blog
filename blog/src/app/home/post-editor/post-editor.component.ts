import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../shared/services/posts.service';
import { ToastyService } from '../../shared/services/toasty.service';
import { Post } from '../../shared/models/post';

@Component({
    selector: 'app-post-editor',
    templateUrl: './post-editor.component.html',
    styleUrls: ['./post-editor.component.css'],
    standalone: false
})
export class PostEditorComponent implements OnInit{

  constructor(
    private postsService: PostsService,
    private toast: ToastyService,
  ) {}

  @Input() post: Post = {
    _id: '',
    userId: 0,
    title: '',
    content: '',
    hidden: false,
    published: new Date()
  };
  @Output() postChange: EventEmitter<Post> = new EventEmitter();

  @Output("cancelFunction") cancelFunction: EventEmitter<any> = new EventEmitter();

  postForm = new UntypedFormGroup({
    "title": new UntypedFormControl(null, Validators.required),
    "content": new UntypedFormControl(null, Validators.required)
  })

  isPreview: boolean = false;

  ngOnInit(): void {
    this.postForm.patchValue({title: this.post.title})
    this.postForm.patchValue({content: this.post.content})
  }

  togglePreview() {
    this.isPreview = !this.isPreview; 
   }

  onSubmit(): void {
    if (this.post._id) {
      this.updatePost();
    } else {
      this.submitPost();
      this.postForm.reset();
    }
  }

  updatePost(): void {
    this.postsService.updatePost(this.post._id, this.getEditedPost()).subscribe({
      next: (post) => {
        this.postChange.emit(this.getEditedPost());
        this.cancelFunction.emit()
      },
      error: (error) => {
        console.log(error);
        this.toast.pushNewToasty(
          error.message,
          'is-light is-danger'
        );
      },
    })
  }

  submitPost(): void {
    this.postsService.createPost(this.postForm.value.title, this.postForm.value.content).subscribe({
      next: (post) => {
        this.cancelFunction.emit()
        // TODO: This list needs to be in @Input OR handled by the service
        // this.retrievedPosts.results.unshift(post);
      },
      error: (error) => {
        console.log(error); // Create toasty!
        this.toast.pushNewToasty(
          error.message,
          'is-light is-danger'
        );
      },
    })
  }

  getEditedPost(): Post {
    return {...this.post, title: this.postForm.value.title, content: this.postForm.value.content}
  }

}
