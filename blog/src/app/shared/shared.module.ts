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


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PostComponent,
    ToastyNotificationComponent,
    UserAreaComponent,
    MarkdownPipe,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    // UserAreaComponent has router links:
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ToastyNotificationComponent,
    UserAreaComponent,
    PostComponent
  ]
})
export class SharedModule { }
