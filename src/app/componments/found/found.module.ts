import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FoundComponent} from "./found.component";
import { ShareModule } from "./../../shared/share.module";
@NgModule({
    declarations:[
        FoundComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ShareModule,
    ],
    exports:[FoundComponent],
    providers:[

    ],

})
export class FoundModule{
  
}