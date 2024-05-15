import { Component } from '@angular/core';

import AOS from "aos";

@Component({
  selector: 'service-details',
  standalone: true,
  imports: [],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {


  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });

  }
}
