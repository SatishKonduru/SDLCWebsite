import { Component, OnInit } from '@angular/core';

import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'hotel-management-app',
  standalone: true,
  imports: [],
  templateUrl: './hotel-management-app.component.html',
  styleUrl: './hotel-management-app.component.css',
})
export class HotelManagementAppComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
