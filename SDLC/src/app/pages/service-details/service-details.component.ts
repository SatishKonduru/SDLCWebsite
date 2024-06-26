import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import AOS from "aos";

@Component({
  selector: 'service-details',
  standalone: true,
  imports: [],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}





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
