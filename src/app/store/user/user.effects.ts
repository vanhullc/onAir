import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UserRequestService, UserService } from './user.service';
import { UserActions } from './user.actions';
import { createAction } from '../create-action';
import { ActionPayload } from '../action';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class UserEffects {

    constructor(
        // private router: Router,
        private actions$: Actions,
        private userRequestService: UserRequestService,
        private userService: UserService,
    ) {

    }

  @Effect() login$ = this.actions$
    .ofType(UserActions.LOGIN)
    .switchMap((data: ActionPayload) => {
      return this.userRequestService.login(data.payload)
        .map((res) => {
          return createAction(UserActions.LOGIN_SUCCESS, res);
        }).catch((res: HttpErrorResponse) => {
          return Observable.of(createAction(UserActions.LOGIN_FAIL, res));
        });
    });

    @Effect() signup$ = this.actions$
      .ofType(UserActions.SIGNUP)
      .switchMap((data: ActionPayload) => {
        return this.userRequestService.signup(data.payload)
          .map((res) => {
            return createAction(UserActions.SIGNUP_SUCCESS, res);
          }).catch((res: HttpErrorResponse) => {
            return Observable.of(createAction(UserActions.SIGNUP_FAIL, res));
          });
      });
      
    @Effect() set$ = this.actions$
    .ofType(UserActions.SET)
    .switchMap((data: ActionPayload) => {
      return this.userRequestService.set(data.payload)
        .map((res) => {
          return createAction(UserActions.SET_SUCCESS, res);
        }).catch((res: HttpErrorResponse) => {
          return Observable.of(createAction(UserActions.SET_FAIL, res));
        });
    });

}