import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-advantage',
  standalone: true,
  imports: [],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvantageComponent {
  /**
   * Путь к картинке
   */
  @Input() imgSrc: string = '';

  /**
   * Заголовок
   */
  @Input() title: string = '';

  /**
   * Текст
   */
  @Input() text: string = '';

}
