import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { ToastyNotificationComponent } from './toasty-notification/toasty-notification.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PostComponent,
    ToastyNotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ToastyNotificationComponent
  ]
})
export class SharedModule { }
