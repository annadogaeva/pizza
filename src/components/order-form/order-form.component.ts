import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {InputComponent} from "../input/input.component";
import {ButtonComponent} from "../button/button.component";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NoDotsDirective} from "../../directives/no-dots.directive";
import {CommonModule} from "@angular/common";
import {OrderFormHttpService} from "./order-form.http.service";
import {DialogService} from "@ngneat/dialog";
import {DialogSuccessComponent} from "../dialog-success/dialog-success.component";

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    NoDotsDirective,
    CommonModule
  ],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    OrderFormHttpService
  ]
})
export class OrderFormComponent implements OnInit {

  #formBuilder: FormBuilder = inject(FormBuilder);
  #orderHttpService: OrderFormHttpService = inject(OrderFormHttpService);
  orderForm: FormGroup = this.#formBuilder.group({});
  #dialog: DialogService = inject(DialogService);

  ngOnInit() {
    const controls = {
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    };

    this.orderForm = this.#formBuilder.group(controls);
  }

  /**
   * Получить контрол формы
   * @param name
   */
  getFormControl(name: string): FormControl {
    return this.orderForm.get(name) as FormControl;
  }

  /**
   * Отправка формы
   */
  onSubmit() {
    if (this.orderForm.valid) {
      this.#orderHttpService.addOrder(this.orderForm.value).subscribe({
        next: () => {
          this.#dialog.open(DialogSuccessComponent, {
            data: {
              text: 'Спасибо за заказ!',
            },
          });
          this.orderForm.reset();
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      this.orderForm.markAllAsTouched();
    }
  }
}
