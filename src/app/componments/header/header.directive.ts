/**
 * Created by 31618 on 2017/4/1.
 */
import {Directive, ElementRef, Input} from "@angular/core";


@Directive({
  selector:'highlightColor'
})
export  class ShowBackIconDirective {


  constructor(el:ElementRef){


  }

  @Input() highlightColor: string;



}
