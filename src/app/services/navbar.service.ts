import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NavbarService {

  static changeEvent = new EventEmitter();

  static setSearch(data: any) {
      console.log('setSearch');
    this.changeEvent.emit({search: data});
  }
}
