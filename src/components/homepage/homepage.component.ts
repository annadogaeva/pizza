import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeroComponent} from "../hero/hero.component";
import {CatalogComponent} from "../catalog/catalog.component";
import {OrderComponent} from "../order/order.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroComponent,
    CatalogComponent,
    OrderComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {

}
