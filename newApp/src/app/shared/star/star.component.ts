import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() starRating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  starWidth: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
      this.starWidth = this.starRating * 86 / 5;
  }

  onClick() {

    this.ratingClicked.emit('Clicked Rating is' + this.starRating);

  }

}
