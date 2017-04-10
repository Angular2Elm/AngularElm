import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {OrderComponent} from "./order.component";
import { ShareModule } from "./../../shared/share.module";
// import {FoodEnteryComponment} from "./foodentery/foodentery.component";
@NgModule({
    declarations:[
        OrderComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ShareModule,
    ],
    exports:[OrderComponent],
    providers:[

    ],

})
export class OrderModule{
  
}