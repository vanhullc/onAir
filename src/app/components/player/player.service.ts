import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PlayerService {

  static changeEvent = new EventEmitter();
  static radio: any = null;

  static setRadio(data: any) {
      console.log('Setting Radio Service');
      console.log(data);
    if (data.radio && data.user) {
        this.changeEvent.emit({on: true, radio: data.radio, user: data.user});
    } else {
        this.changeEvent.emit({on: false});
    }
  }
}
