import { ContainerComponent } from './container/container.component';
import { SearchbarComponent } from './container/components/searchbar/searchbar.component';
import { MenuComponent } from './container/components/menu/menu.component';
import { InformationComponent } from './container/components/information/information.component';
import { HeaderComponent } from './container/components/header/header.component';
import { BaseboardComponent } from './container/components/baseboard/baseboard.component';
import { PublicRoutingModule } from './public-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ContainerComponent, BaseboardComponent, HeaderComponent, InformationComponent, MenuComponent, SearchbarComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
