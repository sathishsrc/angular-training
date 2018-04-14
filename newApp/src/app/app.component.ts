import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './shared/subscribe.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'cts app';
  userName: string;

  constructor(private _user: SubscribeService) { }

  ngOnInit() {
    this._user.cast.subscribe(user => this.userName = user);
  }

}
