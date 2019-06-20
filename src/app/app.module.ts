import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
