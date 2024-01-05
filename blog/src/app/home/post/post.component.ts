import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
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
export class PostComponent implements OnInit, OnDestroy{

  isAuthenticated: boolean = false;
  isEditorOpen: boolean = false;
  private authListener!: Subscription;

  isCollapsed: boolean = true;
  isCollapseable: boolean = false;

  constructor(
    private postsService: PostsService,
    private auth: AuthenticationService,
    private toast: ToastyService,
    private element: ElementRef,
    private renderer: Renderer2,
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
  @Input() isReaderMode: boolean = false;

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

  ngAfterViewInit() {
    if (this.isReaderMode || this.isPreview) {
      return;
    }
    // It's not particularly easy to keep track of the height of components
    // dynamically, not to mention the performance hit that comes with it.
    // The solution below considers the user won't resize the browser window
    const height = this.element.nativeElement.firstChild.offsetHeight
    // https://stackoverflow.com/a/45001255
    const remSize = parseInt(getComputedStyle(document.documentElement).fontSize)
    // https://angular.io/errors/NG0100
    Promise.resolve().then(() => {
      if (height / remSize > 12) {
        this.renderer.addClass(this.element.nativeElement.firstChild, 'collapsed')
        this.isCollapseable = true;
      }
    })

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

  toggleCollapse() {
    if (this.isCollapsed) {
      this.renderer.removeClass(this.element.nativeElement.firstChild, 'collapsed')
    } else {
      this.renderer.addClass(this.element.nativeElement.firstChild, 'collapsed')
    }
    this.isCollapsed = !this.isCollapsed;
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
