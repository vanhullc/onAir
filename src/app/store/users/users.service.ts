import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';
import { UsersState } from './users.model';
import { UsersActions } from './users.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

    private _usersEvent;
    private _users: Observable<UsersState>;

    constructor(
        private store: Store<AppStore>,
        private usersActions: UsersActions,
    ) {
        this._users = this.store.select('users');
    }

    public getHome(data) {
        this.usersActions.getHome(data);
    }

    public search(data) {
        this.usersActions.search(data);
    }
  
}

@Injectable()
export class UsersRequestService {

    constructor(
        private http: HttpClient
    ) {}

    public getHome(payload) {
        //
        return this.http.get('');
    }

    public search(payload) {
      //
      return this.http.get('');
    }

}