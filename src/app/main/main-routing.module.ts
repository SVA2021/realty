import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { SaleComponent } from './pages/sale/sale.component';
import { RentComponent } from './pages/rent/rent.component';
import { CommercialComponent } from './pages/commercial/commercial.component';
import { MortgageComponent } from './pages/mortgage/mortgage.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'sale',
        component: SaleComponent
      },
      {
        path: 'rent',
        component: RentComponent
      },
      {
        path: 'mortgage',
        component: MortgageComponent
      },
      {
        path: 'commercial',
        component: CommercialComponent
      },
      {
        path: '',
        redirectTo: 'sale',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
