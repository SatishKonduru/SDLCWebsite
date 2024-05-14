import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [HeroComponent,AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
 