import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { ToastyService } from '../services/toasty.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent {

  constructor(
    private postsService: PostsService,
    private toast: ToastyService,
  ) {}

  postForm = new UntypedFormGroup({
    "title": new UntypedFormControl(null, Validators.required),
    "content": new UntypedFormControl(null, Validators.required)
  })

  isPreview: boolean = false;
  // TODO: change this on context: Update, Create
  editorContext: string = "Write a new story"

  togglePreview() {
    this.isPreview = !this.isPreview; 
   }

  onSubmit(): void {
    console.log(this.postForm.value)
    this.postsService.createPost(this.postForm.value.title, this.postForm.value.content).subscribe({
      next: (post) => {
        console.log(post)
        // TODO: This list needs to be in @Input OR handled by the service
        // this.retrievedPosts.results.unshift(post);
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

  getDate() {
    return new Date();
  }

}
