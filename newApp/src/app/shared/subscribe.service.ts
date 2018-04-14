import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SubscribeService {
  user = new BehaviorSubject<string>('Rahul');
  cast = this.user.asObservable();

  constructor() { }

  newUser(value) {
    
    this.user.next(value);
  }

}
