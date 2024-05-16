import { Component ,OnInit} from '@angular/core';


import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'hospital-management-app',
  standalone: true,
  imports: [],
  templateUrl: './hospital-management-app.component.html',
  styleUrl: './hospital-management-app.component.css'
})
export class HospitalManagementAppComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
