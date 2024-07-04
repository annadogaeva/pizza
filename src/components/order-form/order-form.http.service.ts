import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IOrder} from "./IOrder";

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
  public addOrder(order: IOrder): Observable<any> {
    return this.#http.post<IOrder>(this.#ordersUrl, order, this.#httpOptions)
  }
}
