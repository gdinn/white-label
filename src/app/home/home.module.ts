import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductsService } from '../../services/products.service';


@NgModule({
  declarations: [HomeComponent],
  providers: [
    ProductsService
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}

/*
  static forRoot(): ModuleWithProviders<HomeModule> {
      return {
          ngModule: HomeModule,
          providers: [
            ProductsService
          ]
      }
  }
*/