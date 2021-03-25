import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SafeHtmlPipe} from "../pipe/safe-html.pipe";

@NgModule({
  declarations: [AppComponent, SafeHtmlPipe],
  imports: [BrowserModule],
  providers: [SafeHtmlPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
