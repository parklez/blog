import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  {
    // Using the exported component as the '' path,
    // if I wanted to, I could redirect 404 pages to this component as well
    // by using '**'.
    path: '', component: HomePageComponent
  },
  {
    path: '**', redirectTo: '' // Or some 404component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
