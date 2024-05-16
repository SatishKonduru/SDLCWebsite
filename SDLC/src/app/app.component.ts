import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from "aos";
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';

import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}
  title = 'SDLC';

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });

  }

}
