import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable } from "rxjs";

interface ApiResponse {
  id: string;
  url: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuotesApi {
  private failRequest = false;
  constructor(private http: HttpClient) { }

  public getQuote(): Observable<{ id: string; quote: string }> {
    const url = this.failRequest ? 'https://localhost:4/this-should-fail' : 'https://api.chucknorris.io/jokes/random';
    this.failRequest = !this.failRequest;
    return this.http.get<ApiResponse>(url).pipe(
      map(r => ({
        id: r.id,
        quote: r.value
      })),
      delay(800)
    )
  }
}
