import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll);
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  

  onScroll() {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}
