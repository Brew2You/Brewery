import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {
      path: '', redirectTo: 'welcome', pathMatch: 'full'
    },
    {
      path: 'welcome', loadChildren: '../welcome/welcome.module#WelcomeModule'
    }
  ]}
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
export class DashboardRoutingModule { }
