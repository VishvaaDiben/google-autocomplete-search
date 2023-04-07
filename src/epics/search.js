import { SEARCH_PLACE, searchPlaceError, searchPlaceSuccess } from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';

import { API_ENDPOINT } from '../../config';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';

export const searchPlaceEpic = action$ => action$.pipe(
  ofType(SEARCH_PLACE),
  switchMap(({ payload }) => {
    const url = `${API_ENDPOINT}/textsearch/json?query=${payload}&key=${process.env.API_KEY}`;
    return ajax.getJSON(url).pipe(
      map(response => searchPlaceSuccess(response.results)),
      catchError(error => of(searchPlaceError(error)))
    );
  })
);

