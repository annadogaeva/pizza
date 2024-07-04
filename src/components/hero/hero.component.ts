import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AdvantageComponent} from "../advantage/advantage.component";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    AdvantageComponent,
    ButtonComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {

}
