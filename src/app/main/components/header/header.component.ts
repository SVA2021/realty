import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TabWithIconT } from '@models/taiga.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public activeItemIndex = 0;

  public tabs: TabWithIconT[] = [
    {
      id: 'sale',
      title: 'Продажа',
      icon: 'tuiIconDollarSignLarge'
    },
    {
      id: 'rent',
      title: 'Аренда',
      icon: 'tuiIconTransparentLarge'
    },
    {
      id: 'mortgage',
      title: 'Ипотека',
      icon: 'tuiIconPercentLarge'
    },
    {
      id: 'commercial',
      title: 'Коммерческая',
      icon: 'tuiIconBriefcaseLarge'
    }
  ];

  private readonly router = inject(Router);

  onClick(index: number): void {
    this.router.navigate(['/' + this.tabs[index].id]).then();
  }
}
