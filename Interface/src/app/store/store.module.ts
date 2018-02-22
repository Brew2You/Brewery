import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { AppRoutingModule } from '../app-routing.module';
import { BeerComponent } from './beer/beer.component';
import { BeerService } from './beer/beer.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    StoreComponent,
    BeerComponent
  ],
  providers: [
    BeerService
  ],
  declarations: [
    StoreComponent,
    BeerComponent
  ]
})
export class StoreModule { }
