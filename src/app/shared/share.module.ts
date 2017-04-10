import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';;
import { HeaderComponent } from "./../componments/header/header.component";
import { ShowBackIconDirective } from "./../componments/header/header.directive";

@NgModule({
  declarations: [
    HeaderComponent,
    ShowBackIconDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [HeaderComponent],
  providers: [],

})
export class ShareModule { }
