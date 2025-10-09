import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed = true;
  isScrolled = false;
servicesOpen = false;

  constructor(private router: Router) {}

  toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
  document.body.classList.toggle('mobile-nav-open', !this.isCollapsed);
  if (this.isCollapsed) this.servicesOpen = false;
}
gotoAndClose(route: string) {
  this.router.navigate([route]);
  this.isCollapsed = true;
  this.servicesOpen = false;
  document.body.classList.remove('mobile-nav-open');
}


  navigateTo(route: string) {
    this.router.navigate([route]);
    this.isCollapsed = true; // auto-close menu on mobile
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
