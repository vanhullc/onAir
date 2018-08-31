import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { RadioRequestService, RadioService } from './radio.service';
import { RadioActions } from './radio.actions';
import { createAction } from '../create-action';
import { ActionPayload } from '../action';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class RadioEffects {

    constructor(
        // private router: Router,
        private actions$: Actions,
        private radioRequestService: RadioRequestService,
        private radioService: RadioService,
    ) {

    }

  @Effect() get$ = this.actions$
    .ofType(RadioActions.GET)
    .switchMap((data: ActionPayload) => {
      return this.radioRequestService.get(data.payload)
        .map((res) => {
          return createAction(RadioActions.GET_SUCCESS, res);
        }).catch((res: HttpErrorResponse) => {
          return Observable.of(createAction(RadioActions.GET_FAIL, res));
        });
    });

    @Effect() set$ = this.actions$
      .ofType(RadioActions.SET)
      .switchMap((data: ActionPayload) => {
        return this.radioRequestService.set(data.payload)
          .map((res) => {
            return createAction(RadioActions.SET_SUCCESS, res);
          }).catch((res: HttpErrorResponse) => {
            return Observable.of(createAction(RadioActions.SET_FAIL, res));
          });
      });

}