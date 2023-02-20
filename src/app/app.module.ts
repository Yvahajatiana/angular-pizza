import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollDirective } from './shared/directives/scroll/scroll.directive';
import { BaseComponent } from './views/layout/base/base.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BaseComponent, ScrollDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
