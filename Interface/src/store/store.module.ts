import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StoreService } from './store.service';
import { AppRoutingModule } from '../app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    StoreComponent
  ],
  providers: [
    StoreService
  ],
  declarations: [
    StoreComponent
  ]
})
export class StoreModule { }
