import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {CatalogItemComponent} from "../catalog-item/catalog-item.component";
import {CatalogHttpService} from "./catalog.http.service";
import {BehaviorSubject, takeUntil} from "rxjs";
import {IProduct} from "./IProduct";
import {CommonModule} from "@angular/common";
import {DestroyService} from "../../services/destroy.service";

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [
        CatalogItemComponent,
        CommonModule
    ],
    templateUrl: './catalog.component.html',
    styleUrl: './catalog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        CatalogHttpService,
        DestroyService
    ]
})
export class CatalogComponent implements OnInit {

    /**
     * Зависимости
     */
    #catalogHttpService: CatalogHttpService = inject(CatalogHttpService);
    #destroy$: DestroyService = inject(DestroyService);

    /**
     * Асинхронный список продуктов
     */
    public products$: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

    ngOnInit() {
        this.#catalogHttpService.getProducts()
            .pipe(
                takeUntil(this.#destroy$)
            )
            .subscribe({
                next: (res: IProduct[]) => {
                    this.products$.next(res);
                },
                error: (error) => {
                    console.error(error);
                }
            })
    }
}
