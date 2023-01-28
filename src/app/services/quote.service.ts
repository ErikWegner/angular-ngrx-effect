import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { QuotesApi } from '../adapters/quotes';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private readonly quotesApi: QuotesApi) { }

  public getQuote(): Observable<string> {
    return this.quotesApi.getQuote().pipe(map(q => q.quote));
  }
}
