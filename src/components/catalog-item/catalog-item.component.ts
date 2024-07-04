import {ChangeDetectionStrategy, Component, inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {IAlbum, Lightbox, LightboxConfig, LightboxEvent} from 'ngx-lightbox';
import {LightboxWindowRef} from "ngx-lightbox/lightbox-event.service";

@Component({
    selector: 'app-catalog-item',
    standalone: true,
    imports: [
        ButtonComponent
    ],
    templateUrl: './catalog-item.component.html',
    styleUrl: './catalog-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        Lightbox,
        LightboxConfig,
        LightboxEvent,
        LightboxWindowRef
    ]
})
export class CatalogItemComponent implements OnChanges {

    /**
     * Зависимости
     */
    #lightbox: Lightbox = inject(Lightbox);

    /**
     * Ссылка на картинку
     */
    @Input() imageSrc: string = '';

    /**
     * Заголовок карточки
     */
    @Input() title: string = '';

    /**
     * Описание карточки
     */
    @Input() description: string = '';

    /**
     * Альбом для Lightbox
     */
    album: IAlbum = {
        src: this.imageSrc,
        caption: this.title,
        thumb: this.imageSrc
    }

    /**
     * Открыть лайтбокс
     */
    public openLightbox() {
        this.#lightbox.open([this.album]);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('imageSrc' in changes || 'title' in changes) {
            this.album = {
                src: this.imageSrc,
                caption: this.title,
                thumb: this.imageSrc
            };
        }
    }
}
