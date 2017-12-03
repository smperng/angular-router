import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <nz-layout>
    <nz-sider [nzWidth]="200" style="background:#fff; height: calc(100vh - 64px);">
      <ul nz-menu [nzMode]="'inline'" style="height:100%">
        <li *ngFor="let item of items"
          [routerLink]="item.route"
          [routerLinkActive]="'ant-menu-item-selected'"
          nz-menu-item>
            {{item.name}}
        </li>
      </ul>
    </nz-sider>
    <router-outlet></router-outlet>
  </nz-layout>
  `,
})
export class HomeComponent {
  items = Array(3)
    .fill(0)
    .map((x, i) => ({
      name: `Home-${i + 1}`,
      route: [`home-${i + 1}`],
    }));
}
