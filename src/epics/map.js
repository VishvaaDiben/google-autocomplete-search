import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { getPlaceDetailsFailure, getPlaceDetailsSuccess } from '../actions';

import { API_ENDPOINT } from '../config';
import { GET_PLACE_DETAILS } from '../constants/actionTypes';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';

export const getPlaceDetailsEpic = action$ =>
  action$.pipe(
    ofType(GET_PLACE_DETAILS),
    switchMap(action =>
      from(
        ajax.getJSON(
          `${API_ENDPOINT}/details/json?place_id=${action.payload}&key=${process.env.API_KEY}`
        )
      ).pipe(
        map(response => getPlaceDetailsSuccess(response.result)),
        catchError(error => of(getPlaceDetailsFailure(error.message)))
      )
    )
  );

