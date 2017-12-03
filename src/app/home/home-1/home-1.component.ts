import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-1',
  template: `
  <div style="padding: 20px;">
    <nz-radio-group
     [(ngModel)]="activeRoute"
     (ngModelChange)="onTabChange($event)"
     [nzSize]="'large'">
        <label *ngFor="let tab of tabs" nz-radio-button [nzValue]="tab.route">
        <span>{{tab.name}}</span>
        </label>
    </nz-radio-group>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [
    `
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }
  `,
  ],
})
export class Home1Component {
  activeRoute = 'tab-1';

  tabs = Array(3)
    .fill(0)
    .map((x, i) => ({
      name: `Home-1 Tab-${i + 1}`,
      route: `tab-${i + 1}`,
    }));

  constructor(private router: Router) {}

  onTabChange() {
    this.router.navigate(['home', 'home-1', this.activeRoute]);
  }
}
