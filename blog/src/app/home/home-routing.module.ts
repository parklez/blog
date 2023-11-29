import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostReaderComponent } from '../shared/post-reader/post-reader.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'post/:id', component: PostReaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
