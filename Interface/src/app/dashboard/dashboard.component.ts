import { Component, OnInit, Input } from '@angular/core';
import { DashboardOptions } from './dashboardOptions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  /*@Input()*/ sideNavOptions: DashboardOptions[];

  ngOnInit() {
    if (!this.sideNavOptions) {
      this.sideNavOptions = [
        {
          optionName: 'test',
          optionRoute: 'store'
        }
      ];
    }
  }

}
