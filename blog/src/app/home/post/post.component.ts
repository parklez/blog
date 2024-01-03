import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostsService } from '../../shared/services/posts.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ToastyService } from '../../shared/services/toasty.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  isAuthenticated: boolean = false;
  isEditorOpen: boolean = false;
  private authListener!: Subscription;

  constructor(
    private postsService: PostsService,
    private auth: AuthenticationService,
    private toast: ToastyService,
  ) { }

  @Input() post: Post = {
    _id: '',
    userId: 0,
    title: '',
    content: '',
    hidden: false,
    published: new Date()
  };

  @Input() isPreview: boolean = false;

  isDeleted = false;

  ngOnInit(): void {
    // This constantly checks for any change in the state of authentication, true or false.
    this.authListener = this.auth.getAuthListener().subscribe({
      next: (user) => {
        this.isAuthenticated = user.isAuthenticated;
        if (!this.isAuthenticated && this.isEditorOpen) {
          this.toggleEditor();
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.authListener.unsubscribe();
  }

  deletePost() {
    this.postsService.deletePost(this.post._id).subscribe({
      next: (_) => {
        this.post.content = 'deleted'
        this.post.title = 'deleted'
        this.toast.pushNewToasty(
          'Post deleted successfully!',
          'is-light is-success'
        );
        this.isDeleted = true;
      },
      error: (error) => {
        this.toast.pushNewToasty(
          error.error?.error ? error.error.error : `${error.status} - ${error.statusText}`,
          'is-light is-danger'
        );
      }
    })

  }

  toggleEditor() {
    this.isEditorOpen = !this.isEditorOpen;
  }

  setPreloadedPost() {
    if (!this.isPreview){
      this.postsService.setPreloadedPost(this.post)
    }
  }

  copyShareLink() {
    const useHash = environment.static ? '#/' : ''
    navigator.clipboard.writeText(`${document.head.baseURI}${useHash}post/${this.post._id}`);
    this.toast.pushNewToasty('Copied to clipboard!', 'is-dark', 1.5)
  }

}
