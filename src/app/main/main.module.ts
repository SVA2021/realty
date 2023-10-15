import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CommercialComponent } from './pages/commercial/commercial.component';
import { MortgageComponent } from './pages/mortgage/mortgage.component';
import { RentComponent } from './pages/rent/rent.component';
import { SaleComponent } from './pages/sale/sale.component';
import { MainComponent } from './main.component';
import { ALL_TAIGA_UI_MODULES } from '../helpers/taiga/all-taiga-modules';
@NgModule({
  declarations: [HeaderComponent, CommercialComponent, MortgageComponent, RentComponent, SaleComponent, MainComponent],
  imports: [CommonModule, MainRoutingModule, ALL_TAIGA_UI_MODULES]
})
export class MainModule {}
