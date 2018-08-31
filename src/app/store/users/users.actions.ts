import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';
import { createAction } from '../create-action';


@Injectable()
export class UsersActions {

    static GET_HOME = 'USERS_GET_HOME_SEND';
    static GET_HOME_SUCCESS = 'USERS_GET_HOME_SUCCESS';
    static GET_HOME_FAIL = 'USERS_GET_HOME_FAIL';
    static SEARCH = 'USERS_SEARCH_SEND';
    static SEARCH_SUCCESS = 'USERS_SEARCH_SUCCESS';
    static SEARCH_FAIL = 'USERS_SEARCH_FAIL';

    constructor(
        private store: Store<AppStore>
    ) {}

    public getHome(payload) {
        this.store.dispatch(createAction(UsersActions.GET_HOME, payload));
    }

    public search(saveFrom) {
        this.store.dispatch(createAction(UsersActions.SEARCH, saveFrom));
    }


}