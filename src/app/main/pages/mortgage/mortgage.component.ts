import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MortgageComponent {}
