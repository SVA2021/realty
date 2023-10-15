import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommercialComponent {}
