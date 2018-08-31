import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';
import { RadiosState } from './radios.model';
import { RadiosActions } from './radios.actions';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from '../../../../node_modules/rxjs';


@Injectable()
export class RadiosService {

    private _radiosEvent;
    private _radios: Observable<RadiosState>;

    constructor(
        private store: Store<AppStore>,
        private radiosActions: RadiosActions,
    ) {
        this._radios = this.store.select('radios');
    }

    public search(data) {
        this.radiosActions.search(data);
    }
  
}

@Injectable()
export class RadiosRequestService {

    constructor(
        private http: HttpClient
    ) {}

    public search(payload) {
        //
        return this.http.get('');
    }

}