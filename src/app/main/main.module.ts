import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CommercialComponent } from './pages/commercial/commercial.component';
import { MortgageComponent } from './pages/mortgage/mortgage.component';
import { RentComponent } from './pages/rent/rent.component';
import { SaleComponent } from './pages/sale/sale.component';
@NgModule({
  declarations: [HeaderComponent, CommercialComponent, MortgageComponent, RentComponent, SaleComponent],
  imports: [CommonModule, MainRoutingModule]
})
export class MainModule {}
