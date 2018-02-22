import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { BeerComponent } from './beer/beer.component';

const routes: Routes = [
  {path: '', component: StoreComponent,
    children: [
      {
        path: 'Beer', component: BeerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class StoreRoutingModule { }
