import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    //Disable angular routing for this module
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    // Exporting this component explicitly, so that other
    // modules can access it directly. In this case, I want app-routing to
    // use this component on '' path.
    // HomePageComponent 
  ]
})
export class HomeModule { }
