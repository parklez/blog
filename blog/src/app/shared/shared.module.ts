import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { ToastyNotificationComponent } from './toasty-notification/toasty-notification.component';
import { RouterModule } from '@angular/router';
import { UserAreaComponent } from './user-area/user-area.component';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostReaderComponent } from './post-reader/post-reader.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PostComponent,
    PostEditorComponent,
    ToastyNotificationComponent,
    UserAreaComponent,
    MarkdownPipe,
    NotFoundComponent,
    PostReaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // UserAreaComponent has router links:
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ToastyNotificationComponent,
    UserAreaComponent,
    PostComponent,
    PostEditorComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
