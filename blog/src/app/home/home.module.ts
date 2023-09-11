import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    //Disable angular routing for this module
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    // Exporting this component explicitly, so that other
    // modules can access it directly. In this case, I want app-routing to
    // use this component on '' path.
    // HomePageComponent 
  ]
})
export class HomeModule { }
