import { AfterContentInit, Component } from '@angular/core';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-parallax-space',
  templateUrl: './parallax-space.component.html',
  styleUrls: ['./parallax-space.component.scss'],
})
export class ParallaxSpaceComponent implements AfterContentInit {
  constructor() {}

  ngAfterContentInit() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
    });
  }
}
