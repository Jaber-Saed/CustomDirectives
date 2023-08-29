import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SetBackGroundDirective } from '../app/CustomDirective/setBackGround.directive';
import { HighlighDirective } from './CustomDirective/highligh.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterhighlightDirectiveTsDirective } from './CustomDirective/betterhighlight.directive.ts.directive'

@NgModule({
  declarations: [
    AppComponent,
    SetBackGroundDirective,
    HighlighDirective,
    HoverDirective,
    BetterhighlightDirectiveTsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
