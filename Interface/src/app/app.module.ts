import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from './store/store.module';
import { WelcomeModule } from './Welcome/welcome.module';
import { WelcomeRoutingModule } from './welcome-routing/welcome-routing.module';
import { StoreRoutingModule } from './store/store-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
