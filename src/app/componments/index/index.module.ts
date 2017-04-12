import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IndexComponent} from "./index.component";
import {FoodEnteryDirective}from './foodentery/foodentery.directive'
 import {FoodEnteryComponment} from "./foodentery/foodentery.component";
@NgModule({
    declarations:[
        IndexComponent,
        FoodEnteryComponment,
        FoodEnteryDirective,
    ],
    imports:[
        CommonModule,
        FormsModule,
    ],
   
    providers:[

    ],

})
export class IndexModule{
  
}