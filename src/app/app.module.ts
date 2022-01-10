import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ParallaxSpaceComponent } from './components/parallax-space/parallax-space.component';
import { ResizeService } from './services/resize.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParallaxSpaceComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ResizeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
