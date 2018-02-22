import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { StoreComponent } from '../store/store.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
