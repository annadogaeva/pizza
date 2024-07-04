import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";

/**
 * Сервис для отписки
 */
@Injectable({
  providedIn: 'root'
})
export class DestroyService extends Subject<void> implements OnDestroy {

  ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
