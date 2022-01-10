import { Component, HostListener } from '@angular/core';
import { ResizeService } from './services/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'about-me';

  constructor(private resizeService: ResizeService) {}

  ngOnInit(): void {
    this.resizeService.onWidthChanged(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.resizeService.onWidthChanged(window.innerWidth);
  }
}
