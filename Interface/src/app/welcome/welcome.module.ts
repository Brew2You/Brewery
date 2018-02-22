import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { WelcomeRoutingModule } from '../welcome-routing/welcome-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WelcomeRoutingModule
  ],
  exports: [
    WelcomeComponent
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
