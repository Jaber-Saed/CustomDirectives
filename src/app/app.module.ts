import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SetBackGroundDirective } from '../app/CustomDirective/setBackGround.directive';
import { HighlighDirective } from './CustomDirective/highligh.directive'

@NgModule({
  declarations: [
    AppComponent,
    SetBackGroundDirective,
    HighlighDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
