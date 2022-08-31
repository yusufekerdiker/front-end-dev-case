import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs/internal/Observable';
import { tap, catchError, throwError } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  url = 'https://5b96285652764b001413bbd1.mockapi.io/api/data';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (err.error instanceof ErrorEvent) {
      errMsg = 'Bir hata oluştu! :' + err.error.message
    } else {
      errMsg = 'Sistemsel bir hata'
    }
    return throwError(errMsg);
  }
}
