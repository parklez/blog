import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostReaderComponent } from './post-reader/post-reader.component';
import { TagsPageComponent } from './tags-page/tags-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'post/:id', component: PostReaderComponent
  },
  // It's not possible to add queryParams without a path,
  // So I'm adding this path instead.
  // https://github.com/angular/angular/issues/9505#issuecomment-231429914
  {
    path: 'posts', component: HomePageComponent
  },
  {
    path: 'tags/:name', component: TagsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
