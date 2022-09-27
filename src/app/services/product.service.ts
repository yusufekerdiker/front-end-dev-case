import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Product} from '../models/product';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, throwError} from 'rxjs';

@Injectable()
export class ProductService {
  bundles: Product[] = [];
  url = 'https://5b96285652764b001413bbd1.mockapi.io/api/data';

  constructor(private http: HttpClient) {
  }

  // getProducts(): any {
  //   this.http.get<Product[]>(this.url).subscribe((res: Product[]) => {
  //     this.bundles = res;
  //   });
  // }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      // tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errMsg: string;
    if (err.error instanceof ErrorEvent) {
      errMsg = 'Bir hata oluştu! :' + err.error.message;
    } else {
      errMsg = 'Sistemsel bir hata';
    }
    return throwError(errMsg);
  }
}
