import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Мясная Делюкс',
        description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
        image: '/assets/images/pizza_meat_deluxe.png'
      },
      {
        id: 2,
        name: 'Морская Премиум',
        description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
        image: '/assets/images/pizza_sea_premium.png'
      },
      {
        id: 3,
        name: 'Бекон и Сосиски',
        description: 'Бекон, сыр, сосиски, ананас, томатная паста',
        image: '/assets/images/pizza_bacon_sausages.png'
      },
      {
        id: 4,
        name: 'Куриная Делюкс',
        description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
        image: '/assets/images/pizza_chicken_deluxe.png'
      },
      {
        id: 5,
        name: 'Барбекю Премиум',
        description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
        image: '/assets/images/pizza_bbq_premium.png'
      },
      {
        id: 6,
        name: 'Пепперони Дабл',
        description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
        image: '/assets/images/pizza_pepperoni_double.png'
      },
      {
        id: 7,
        name: 'Куриное трио',
        description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
        image: '/assets/images/pizza_chicken_trio.png'
      },
      {
        id: 8,
        name: 'Сырная',
        description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
        image: '/assets/images/pizza_cheese.png'
      },
    ];

    const orders: any[] = [];

    return { products, orders };
  }

  genId<T extends { id: any }>(collection: T[]): number {
    return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
  }
}
