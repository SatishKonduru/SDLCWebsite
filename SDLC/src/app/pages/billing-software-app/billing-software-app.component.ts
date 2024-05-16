import { ViewportScroller } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'billing-software-app',
  standalone: true,
  imports: [],
  templateUrl: './billing-software-app.component.html',
  styleUrl: './billing-software-app.component.css'
})
export class BillingSoftwareAppComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
