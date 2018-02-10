import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LaTableModule } from './modules/la-table/la-table.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LaTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
