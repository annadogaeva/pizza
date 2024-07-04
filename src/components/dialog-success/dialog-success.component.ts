import {Component, inject} from '@angular/core';
import {DialogRef} from "@ngneat/dialog";

@Component({
  selector: 'app-dialog-success',
  standalone: true,
  imports: [],
  templateUrl: './dialog-success.component.html',
  styleUrl: './dialog-success.component.scss'
})
export class DialogSuccessComponent {
  constructor() {
    this.ref.updateConfig({
      height: '200px',
      width: '400px',
    });
  }

  ref: DialogRef<{ text: string; }, boolean> = inject(DialogRef);

  get text() {
    if (!this.ref.data) {
      return;
    }
    return this.ref.data.text;
  }


}
