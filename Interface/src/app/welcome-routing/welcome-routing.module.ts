import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent, children: [
      {
        path: 'store', loadChildren: 'app/store/store.module#StoreModule'
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
export class WelcomeRoutingModule { }
