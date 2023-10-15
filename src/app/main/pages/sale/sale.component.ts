import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaleComponent {}
