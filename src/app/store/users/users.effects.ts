import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UsersRequestService, UsersService } from './users.service';
import { UsersActions } from './users.actions';
import { createAction } from '../create-action';
import { ActionPayload } from '../action';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class UsersEffects {

    constructor(
        // private router: Router,
        private actions$: Actions,
        private usersRequestService: UsersRequestService,
        private usersService: UsersService,
    ) {

    }

  @Effect() getHome$ = this.actions$
    .ofType(UsersActions.GET_HOME)
    .switchMap((data: ActionPayload) => {
      return this.usersRequestService.getHome(data.payload)
        .map((res) => {
          return createAction(UsersActions.GET_HOME_SUCCESS, res);
        }).catch((res: HttpErrorResponse) => {
          return Observable.of(createAction(UsersActions.GET_HOME_FAIL, res));
        });
    });

    @Effect() search$ = this.actions$
      .ofType(UsersActions.SEARCH)
      .switchMap((data: ActionPayload) => {
        return this.usersRequestService.search(data.payload)
          .map((res) => {
            return createAction(UsersActions.SEARCH_SUCCESS, res);
          }).catch((res: HttpErrorResponse) => {
            return Observable.of(createAction(UsersActions.SEARCH_FAIL, res));
          });
      });

}