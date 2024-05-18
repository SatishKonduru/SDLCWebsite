import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { HeroComponent } from '../hero/hero.component';
import { ViewportScroller } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [HeroComponent,AboutComponent,RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }


}
 