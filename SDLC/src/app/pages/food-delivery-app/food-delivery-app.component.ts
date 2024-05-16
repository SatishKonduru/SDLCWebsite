import { ViewportScroller } from '@angular/common';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'food-delivery-app',
  standalone: true,
  imports: [],
  templateUrl: './food-delivery-app.component.html',
  styleUrl: './food-delivery-app.component.css'
})
export class FoodDeliveryAppComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
