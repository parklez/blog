import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  // {
  //   // Using the exported component as the '' path,
  //   // if I wanted to, I could redirect 404 pages to this component as well
  //   // by using '**'.
  //   path: '',
  //   component: HomePageComponent,
  // },
  {
    // Is lazy-loading every module the best approach?
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
