import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./componments/header/header.component";
import {ShowBackIconDirective} from "./componments/header/header.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowBackIconDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
