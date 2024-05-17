import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rental',
  standalone: true,
  imports: [],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
