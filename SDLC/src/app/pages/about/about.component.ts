import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }


}
