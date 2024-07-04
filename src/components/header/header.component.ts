import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LogoComponent} from "../logo/logo.component";
import {MenuComponent} from "../menu/menu.component";
import {ButtonComponent} from "../button/button.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    MenuComponent,
    ButtonComponent,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
