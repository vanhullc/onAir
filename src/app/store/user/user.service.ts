import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';
import { UserState } from './user.model';
import { UserActions } from './user.actions';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

    private _userEvent;
    private _user: Observable<UserState>;

    constructor(
        private store: Store<AppStore>,
        private userActions: UserActions,
    ) {
        this._user = this.store.select('user');
    }

    public login(data) {
        this.userActions.login(data);
    }

    public signup(data) {
        this.userActions.signup(data);
    }

    public set(data) {
        this.userActions.set(data)
    }
  
}

@Injectable()
export class UserRequestService {

    constructor(
        private http: HttpClient
    ) {}

    public login(payload) {
        //
        return this.http.get('');
    }

    public signup(payload) {
        //
        return this.http.get('');
    }

    public set(payload) {
        //
        return this.http.get('');
    }

}