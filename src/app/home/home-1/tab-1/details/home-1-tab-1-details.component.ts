import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDataService } from '../../../../app.data.service';

@Component({
  selector: 'app-home-1-tab-1-details',
  template: `
  <div style="margin-top: 20px;padding: 20px;height: 300px;background-color: #fff;">
    <div style="float: right; cursor: pointer;">
      <i (click)="onClickClose()" class="anticon anticon-close"></i>  
    </div>
    <div *ngIf="data">
      <div>Name:</div>
      <div>{{data.name}}</div>
      <div>Age:</div>
      <div>{{data.age}}</div>
      <div>Address:</div>
      <div>{{data.address}}</div>
    </div>
    <div *ngIf="!data">
      No Data ???
    </div>
  </div>
  `,
})
export class Home1Tab1DetailsComponent {
  data = null;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: AppDataService
  ) {
    activatedRoute.params.subscribe(params => {
      console.log('>>> got route params:', params);
      if (params.id) {
        dataService
          .getHome1Tab1DataDetailById(params.id)
          .then(data => (this.data = data));
      }
    });
  }

  onClickClose() {
    this.router.navigate(['home', 'home-1', 'tab-1']);
  }
}
