import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'watsapp-chat-bot',
  standalone: true,
  imports: [],
  templateUrl: './watsapp-chat-bot.component.html',
  styleUrl: './watsapp-chat-bot.component.css'
})
export class WatsappChatBotComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
