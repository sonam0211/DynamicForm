import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToolbarModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
