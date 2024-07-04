import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CatalogHttpService {

  constructor() { }

  #http: HttpClient = inject(HttpClient);

  #productsUrl = 'api/products';

  /**
   * Получить товары с сервера
   */
  getProducts(): Observable<any> {
    return this.#http.get(this.#productsUrl)
  }
}
