import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { environment } from 'src/environments/environment';
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
  {
    path: 'login',
    loadChildren: () =>
      import ('./login-signin/login-signin.module').then((m) => m.LoginSigninModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import ('./register-signup/register-signup.module').then((m) => m.RegisterSignupModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.static })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
