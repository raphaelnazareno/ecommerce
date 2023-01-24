import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { LoweredpriceComponent } from './components/loweredprice/loweredprice.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { OfferdayComponent } from './components/offerday/offerday.component';
import { OffersComponent } from './components/offers/offers.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ShortcutComponent } from './components/shortcut/shortcut.component';
import { SliderComponent } from './components/slider/slider.component';
import { SponsoredComponent } from './components/sponsored/sponsored.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
    ShortcutComponent,
    MenubarComponent,
    PromotionComponent,
    SliderComponent,
    OffersComponent,
    LoweredpriceComponent,
    OfferdayComponent,
    BestsellersComponent,
    SponsoredComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
