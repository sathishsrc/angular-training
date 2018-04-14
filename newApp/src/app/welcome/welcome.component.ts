import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../shared/subscribe.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName: string;
  newUser: string;

  constructor(private _user: SubscribeService) { }

  ngOnInit() {
     this._user.cast.subscribe(user => this.userName = user);
  }

  changeUser() 
{
    this._user.newUser(this.newUser);
  }

}
