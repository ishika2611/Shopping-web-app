import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  condt:boolean = false;
  openclosesidebar()
  {
    if(this.condt==false)
    {
      this.condt = true;
    }
    else
    {
      this.condt = false;
    }
  }
  constructor(private observer: BreakpointObserver) {}
  ngOnInit(): void {

}
}