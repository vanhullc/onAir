import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';
import { createAction } from '../create-action';


@Injectable()
export class UserActions {

    static LOGIN = 'USER_LOGIN_SEND';
    static LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
    static LOGIN_FAIL = 'USER_LOGIN_FAIL';
    static SIGNUP = 'USER_SIGNUP_SEND';
    static SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
    static SIGNUP_FAIL = 'USER_SIGNUP_FAIL';
    static SET = 'USER_SET_SEND';
    static SET_SUCCESS = 'USER_SET_SUCCESS';
    static SET_FAIL = 'USER_SET_FAIL';

    constructor(
        private store: Store<AppStore>
    ) {}

    public login(payload) {
        this.store.dispatch(createAction(UserActions.LOGIN, payload));
    }

    public signup(payload) {
        this.store.dispatch(createAction(UserActions.SIGNUP, payload));
    }

    public set(payload) {
        this.store.dispatch(createAction(UserActions.SET, payload));
    }


}