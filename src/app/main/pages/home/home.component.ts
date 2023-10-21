import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HomeCardT } from '@models/home.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public cards: HomeCardT[] = [
    {
      id: 'sale',
      title: 'Покупка/Продажа',
      description: 'Большой выбор самых популярных видов недвижимости',
      icon: 'tuiIconDollarSignLarge'
    },
    {
      id: 'rent',
      title: 'Аренда',
      description: 'Индивидуальные условия аренды',
      icon: 'tuiIconTransparentLarge'
    },
    {
      id: 'mortgage',
      title: 'Ипотека',
      description: 'Ипотечные кредиты от 0% до 300%',
      icon: 'tuiIconPercentLarge'
    },
    {
      id: 'commercial',
      title: 'Коммерческая недвижимость',
      description: 'Индивидуальные условия для каждой компании',
      icon: 'tuiIconBriefcaseLarge'
    }
  ];

  public bannerSrc = 'https://u.livelib.ru/reader/Arlett/o/zcmnngzx/o-o.jpeg';

  private readonly router = inject(Router);

  onClick(id: string): void {
    this.router.navigate(['/', id]).then();
  }
}
