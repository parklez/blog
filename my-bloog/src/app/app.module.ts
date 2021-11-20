import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeModule } from './home/home.module';
// import { ProjectsModule } from './projects/projects.module';
// import { AboutModule } from './about/about.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Commenting these out in order to implement 'lazy-loading'
    // HomeModule,
    // ProjectsModule,
    // AboutModule,
    AppRoutingModule, // This goes down the list, so that Angular routes to our other routes first.
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
