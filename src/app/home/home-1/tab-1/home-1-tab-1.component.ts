import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppDataService } from '../../../app.data.service';

@Component({
  selector: 'app-home-1-tab-1',
  template: `
  <div style="margin-top: 20px;">
    <div style="background-color: white;">
      <nz-table #nzTable [nzDataSource]="data" [nzPageSize]="10">
        <thead nz-thead>
        <tr>
            <th nz-th><span>Name</span></th>
            <th nz-th><span>Age</span></th>
            <th nz-th><span>Address</span></th>
        </tr>
        </thead>
        <tbody nz-tbody>
        <tr nz-tbody-tr *ngFor="let data of nzTable.data"
          [ngClass]="{'ant-table-row-selected': data.selected}"
        >
            <td nz-td>
            <a (click)="onClickRow(data)">{{data.name}}</a>
            </td>
            <td nz-td>{{data.age}}</td>
            <td nz-td>{{data.address}}</td>
        </tr>
        </tbody>
      </nz-table>
    </div>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class Home1Tab1Component implements OnInit, OnDestroy {
  data = [];
  routerEventSubscription = null;

  constructor(private router: Router, private dataService: AppDataService) {
    this.fetchData();
  }

  ngOnInit() {
    this.routerEventSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const e: NavigationEnd = event;
        const idx = e.urlAfterRedirects.indexOf('tab-1');
        if (idx > 0) {
          if (e.urlAfterRedirects.endsWith('tab-1')) {
            this.clearSelected();
          } else {
            const parts = e.urlAfterRedirects.split('/');
            const r = parts[parts.length - 1];
            this.updateSelected(r);
          }
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.routerEventSubscription) {
      this.routerEventSubscription.unsubscribe();
    }
  }

  fetchData() {
    this.dataService.getHome1Tab1Data().then(data => {
      this.data = data;
      this.clearSelected();
    });
  }

  onClickRow(row) {
    this.updateSelected(row.id);
    this.router.navigate(['home', 'home-1', 'tab-1', row.id]);
  }
  updateSelected(id) {
    this.data.forEach(d => (d.selected = d.id === id));
  }
  clearSelected() {
    this.data.forEach(d => (d.selected = false));
  }
}
