import { CarouselComponent } from './home-public/components/carousel/carousel.component';
import { PublicRoutingModule } from './public-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePublicComponent } from './home-public/home-public.component';
import { HeaderComponent } from './home-public/components/header/header.component';
import { MenuComponent } from './home-public/components/menu/menu.component';
import { BaseboardComponent } from './home-public/components/baseboard/baseboard.component';
import { InformationComponent } from './home-public/components/information/information.component';
import { SearchbarComponent } from './home-public/components/searchbar/searchbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    HomePublicComponent,
    HeaderComponent,
    BaseboardComponent,
    InformationComponent,
    MenuComponent,
    SearchbarComponent,
    CarouselComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, SlickCarouselModule],
})
export class PublicModule {}
