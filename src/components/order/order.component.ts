import {ChangeDetectionStrategy, Component} from '@angular/core';
import {OrderFormComponent} from "../order-form/order-form.component";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    OrderFormComponent
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent {

}
