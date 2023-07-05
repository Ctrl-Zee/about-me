import { AfterContentInit, OnDestroy, Component } from '@angular/core';
import Parallax from 'parallax-js';
import { ResizeService } from 'src/app/services/resize.service';
import { ParallaxSpaceComponent } from '../parallax-space/parallax-space.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [ParallaxSpaceComponent],
})
export class HomeComponent implements AfterContentInit, OnDestroy {
  appWidth = 0;
  widthSubscription$ = this.resizeService.appWidth$.subscribe((width) => {
    this.appWidth = width;
  });

  constructor(private resizeService: ResizeService) {}

  ngAfterContentInit() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: this.appWidth > 500 ? true : false,
    });
  }

  ngOnDestroy(): void {
    this.widthSubscription$.unsubscribe();
  }
}
