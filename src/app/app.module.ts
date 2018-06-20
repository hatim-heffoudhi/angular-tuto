import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ApiModule, BASE_PATH} from './swagger/v1';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [{provide: BASE_PATH, useValue:  'http://localhost:3000/v1'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
