import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import {HeaderComponent} from "./componments/header/header.component";
// import {ShowBackIconDirective} from "./componments/header/header.directive";
import {FooterComponent}from "./componments/footer/footer.component";
import {IndexModule}from "./componments/index/index.module";
import {FoundModule}from "./componments/found/found.module";
import {OrderModule}from "./componments/order/order.module";
import {MyModule}from "./componments/my/my.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    FooterComponent,
    // ShowBackIconDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    IndexModule,
    FoundModule,
    OrderModule,
    MyModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
