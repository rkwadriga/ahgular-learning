import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() deleteRequest = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteRequest.emit('Item name');
  }
}
