import { AfterContentInit, OnDestroy, Component } from '@angular/core';
import Parallax from 'parallax-js';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterContentInit, OnDestroy {
  appWidth = 0;
  widthSubscription$ = this.resizeService.appWidth$.subscribe((width) => {
    this.appWidth = width;
    console.log(this.appWidth);
  });

  constructor(private resizeService: ResizeService) {}

  ngAfterContentInit() {
    const scene = document.getElementById('scene');
    console.log(this.appWidth > 500 ? true : false);
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: this.appWidth > 500 ? true : false,
    });
  }

  ngOnDestroy(): void {
    this.widthSubscription$.unsubscribe();
  }
}
