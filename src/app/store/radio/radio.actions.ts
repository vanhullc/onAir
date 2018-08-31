import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';
import { createAction } from '../create-action';


@Injectable()
export class RadioActions {

    static GET = 'RADIO_GET_SEND';
    static GET_SUCCESS = 'RADIO_GET_SUCCESS';
    static GET_FAIL = 'RADIO_GET_FAIL';
    static SET = 'RADIO_SET_SEND';
    static SET_SUCCESS = 'RADIO_SET_SUCCESS';
    static SET_FAIL = 'RADIO_SET_FAIL';

    constructor(
        private store: Store<AppStore>
    ) {}

    public get(payload) {
        this.store.dispatch(createAction(RadioActions.GET, payload));
    }

    public set(payload) {
        this.store.dispatch(createAction(RadioActions.SET, payload));
    }


}