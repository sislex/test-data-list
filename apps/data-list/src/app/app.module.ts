import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LibsDataListLibModule} from '@data-list/libs/data-list-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LibsDataListLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
