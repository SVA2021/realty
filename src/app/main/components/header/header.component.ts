import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { TabWithIconT } from '@models/taiga.model';
import { Router } from '@angular/router';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

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

  public readonly options = ['Темный лес', 'Степь-да-поле', 'Ледяная долина', 'Тридевятое царство'];
  public openDropDown = false;

  private readonly router = inject(Router);

  goHome(): void {
    this.router.navigate(['/']).then();
  }

  onSelectOption(): void {
    this.openDropDown = false;
    this.component?.nativeFocusableElement?.focus();
  }
}
