import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Home1Component } from './home/home-1/home-1.component';
import { Home1Tab1Component } from './home/home-1/tab-1/home-1-tab-1.component';
import { Home1Tab1DetailsComponent } from './home/home-1/tab-1/details/home-1-tab-1-details.component';
import { Home1Tab1DetailsZeroComponent } from './home/home-1/tab-1/details/home-1-tab-1-details-zero.component';
import { Home1Tab2Component } from './home/home-1/tab-2/home-1-tab-2.component';
import { Home1Tab3Component } from './home/home-1/tab-3/home-1-tab-3.component';
import { Home2Component } from './home/home-2/home-2.component';
import { Home3Component } from './home/home-3/home-3.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about/about-1/about-1.component';
import { About2Component } from './about/about-2/about-2.component';
import { About3Component } from './about/about-3/about-3.component';
import { ContactComponent } from './contact/contact.component';
import { Contact1Component } from './contact/contact-1/contact-1.component';
import { Contact2Component } from './contact/contact-2/contact-2.component';
import { Contact3Component } from './contact/contact-3/contact-3.component';
import { EventsComponent } from './events/events.component';
import { Events1Component } from './events/events-1/events-1.component';
import { Events2Component } from './events/events-2/events-2.component';
import { Events3Component } from './events/events-3/events-3.component';
import { ProductsComponent } from './products/products.component';
import { Products1Component } from './products/products-1/products-1.component';
import { Products2Component } from './products/products-2/products-2.component';
import { Products3Component } from './products/products-3/products-3.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home-1', pathMatch: 'full' },
      {
        path: 'home-1',
        component: Home1Component,
        children: [
          { path: '', redirectTo: 'tab-1', pathMatch: 'full' },
          {
            path: 'tab-1',
            component: Home1Tab1Component,
            children: [
              {
                path: '',
                pathMatch: 'full',
                component: Home1Tab1DetailsZeroComponent,
              },
              {
                path: ':id',
                component: Home1Tab1DetailsComponent,
              },
            ],
          },
          {
            path: 'tab-2',
            component: Home1Tab2Component,
          },
          {
            path: 'tab-3',
            component: Home1Tab3Component,
          },
        ],
      },
      {
        path: 'home-2',
        component: Home2Component,
      },
      {
        path: 'home-3',
        component: Home3Component,
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'about-1', pathMatch: 'full' },
      {
        path: 'about-1',
        component: About1Component,
      },
      {
        path: 'about-2',
        component: About2Component,
      },
      {
        path: 'about-3',
        component: About3Component,
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      { path: '', redirectTo: 'contact-1', pathMatch: 'full' },
      {
        path: 'contact-1',
        component: Contact1Component,
      },
      {
        path: 'contact-2',
        component: Contact2Component,
      },
      {
        path: 'contact-3',
        component: Contact3Component,
      },
    ],
  },
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: '', redirectTo: 'events-1', pathMatch: 'full' },
      {
        path: 'events-1',
        component: Events1Component,
      },
      {
        path: 'events-2',
        component: Events2Component,
      },
      {
        path: 'events-3',
        component: Events3Component,
      },
    ],
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'products-1', pathMatch: 'full' },
      {
        path: 'products-1',
        component: Products1Component,
      },
      {
        path: 'products-2',
        component: Products2Component,
      },
      {
        path: 'products-3',
        component: Products3Component,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true, // <-- debugging purposes only
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
