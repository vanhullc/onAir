import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { RadiosRequestService, RadiosService } from './radios.service';
import { RadiosActions } from './radios.actions';
import { createAction } from '../create-action';
import { ActionPayload } from '../action';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class RadiosEffects {

    constructor(
        // private router: Router,
        private actions$: Actions,
        private radiosRequestService: RadiosRequestService,
        private radiosService: RadiosService,
    ) {

    }

  @Effect() search$ = this.actions$
    .ofType(RadiosActions.SEARCH)
    .switchMap((data: ActionPayload) => {
      return this.radiosRequestService.search(data.payload)
        .map((res) => {
          return createAction(RadiosActions.SEARCH_SUCCESS, res);
        }).catch((res: HttpErrorResponse) => {
          return Observable.of(createAction(RadiosActions.SEARCH_FAIL, res));
        });
    });

}
