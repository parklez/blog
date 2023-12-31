import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastyNotificationComponent } from './toasty-notification/toasty-notification.component';
import { RouterModule } from '@angular/router';
import { UserAreaComponent } from './user-area/user-area.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToastyNotificationComponent,
    UserAreaComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule // UserAreaComponent has router links!
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ToastyNotificationComponent,
    UserAreaComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
