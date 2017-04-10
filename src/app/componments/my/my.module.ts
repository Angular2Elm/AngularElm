import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MyComponent} from "./my.component";
import { ShareModule } from "./../../shared/share.module";
// import {FoodEnteryComponment} from "./foodentery/foodentery.component";
@NgModule({
    declarations:[
        MyComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ShareModule,
    ],
    exports:[MyComponent],
    providers:[

    ],

})
export class MyModule{
  
}