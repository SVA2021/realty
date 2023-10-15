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

  public readonly options = ['Темный лес', 'Степь-да-поле', 'Ледяная долина', 'Тридевятое царство'];
  public openDropDown = false;

  private readonly router = inject(Router);

  onClick(index: number): void {
    this.router.navigate(['/' + this.tabs[index].id]).then();
  }

  onSelectOption(): void {
    this.openDropDown = false;
    this.component?.nativeFocusableElement?.focus();
  }
}
