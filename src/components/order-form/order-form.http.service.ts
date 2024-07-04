import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class OrderFormHttpService {

  constructor() { }

  #http: HttpClient = inject(HttpClient);

  #ordersUrl = 'api/orders';  // URL на фейковый API

  #httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /**
   * Добавить заказ
   * @param order
   */
  public addOrder(order: any): Observable<any> {
    return this.#http.post<any>(this.#ordersUrl, order, this.#httpOptions)
  }
}
