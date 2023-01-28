import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { QuoteService } from '../services/quote.service';
import {
  appClicked,
  appLoadFailure,
  appLoading,
  appQuoteLoaded,
} from './app.actions';

@Injectable()
export class AppEffects {
  showLoadingIndicator$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appClicked),
      map(() => appLoading())
    );
  });

  loadQuote$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appClicked),
      exhaustMap(() =>
        this.quoteService.getQuote().pipe(
          map((quote) => appQuoteLoaded({ text: quote })),
          catchError((err) => of(appLoadFailure({ errormessage: err.message })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private quoteService: QuoteService) {}
}
