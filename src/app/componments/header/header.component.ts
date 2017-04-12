/**
 * Created by 31618 on 2017/4/1.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Location} from '@angular/common';

@Component({
  selector: 'header_tpl',
  templateUrl: './header.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //作为属性输入的接入，判断显示不显示返回图标
  @Input() showback: boolean;
  @Input() title:string;
  @Input()  headTitle: string;
  location: Location;
  constructor(location:Location) {
    this.location=location;
  }
  backClick(){
   this.location.back();
  }
  ngOnInit() {

  }
}
