import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';
import { createAction } from '../create-action';


@Injectable()
export class RadiosActions {

    static SEARCH = 'RADIOS_SEARCH_SEND';
    static SEARCH_SUCCESS = 'RADIOS_SEARCH_SUCCESS';
    static SEARCH_FAIL = 'RADIOS_SEARCH_FAIL';

    constructor(
        private store: Store<AppStore>
    ) {}

    public search(payload) {
        this.store.dispatch(createAction(RadiosActions.SEARCH, payload));
    }

}