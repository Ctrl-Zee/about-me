import { Component, HostListener } from '@angular/core';
import { ResizeService } from './services/resize.service';
import { SidebarModule } from 'primeng/sidebar';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        NgClass,
        HomeComponent,
        AboutComponent,
        SidebarModule,
    ],
})
export class AppComponent {
  title = 'Andrew Smith';
  isMenuOpen = false;
  active = false;

  constructor(private resizeService: ResizeService) {}

  ngOnInit(): void {
    this.resizeService.onWidthChanged(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.resizeService.onWidthChanged(window.innerWidth);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
