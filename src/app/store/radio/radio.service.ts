import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';
import { RadioState } from './radio.model';
import { RadioActions } from './radio.actions';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RadioService {

    private _radioEvent;
    private _radio: Observable<RadioState>;

    constructor(
        private store: Store<AppStore>,
        private radioActions: RadioActions,
    ) {
        this._radio = this.store.select('radio');
    }

    public get(data) {
        this.radioActions.get(data);
    }

    public set(data) {
        this.radioActions.set(data);
    }
  
}

@Injectable()
export class RadioRequestService {

    constructor(
        private http: HttpClient
    ) {}

    public get(payload) {
        //
        return this.http.get('');
    }

    public set(payload) {
      //
      return this.http.get('');
    }

}