import {Directive, HostListener} from '@angular/core';

/**
 * Диретива не дает написать или вставить точки в поле ввода
 */
@Directive({
  selector: '[appNoDots]',
  standalone: true
})
export class NoDotsDirective {

  constructor() {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.key === '.') {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    const clipboardData = event.clipboardData;
    if (clipboardData) {
      const pastedText = clipboardData.getData('text');

      if (pastedText.includes('.')) {
        event.preventDefault();
      }
    }
  }

}
