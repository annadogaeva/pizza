import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  /** Событие клика */
  @Output() clickEvent =  new EventEmitter<void>();

  /**
   * Обработка клика
   */
  onClick(): void {
    this.clickEvent.emit();
  }
}
