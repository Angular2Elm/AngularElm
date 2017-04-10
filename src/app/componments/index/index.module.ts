import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IndexComponent} from "./index.component";
// import {FoodEnteryComponment} from "./foodentery/foodentery.component";
@NgModule({
    declarations:[
        IndexComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
    ],
    exports:[IndexComponent],
    providers:[

    ],

})
export class IndexModule{
  
}