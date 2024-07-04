import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IProduct} from "./IProduct";

/**
 * Сервис запросов для каталога
 */
@Injectable()
export class CatalogHttpService {

  constructor() { }

  #http: HttpClient = inject(HttpClient);

  #productsUrl = 'api/products';

  /**
   * Получить товары с сервера
   */
  getProducts(): Observable<IProduct[]> {
    return this.#http.get<IProduct[]>(this.#productsUrl)
  }
}
