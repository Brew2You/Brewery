import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from '../dashboard-routing/dashboard-routing.module';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
