import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from '../dashboard-routing/dashboard-routing.module';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
