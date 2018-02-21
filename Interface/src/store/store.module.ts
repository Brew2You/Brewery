import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StoreService } from './store.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    StoreService
  ],
  declarations: [StoreComponent]
})
export class StoreModule { }
