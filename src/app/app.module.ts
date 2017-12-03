import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppDataService } from './app.data.service';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    Home1Tab1Component,
    Home1Tab1DetailsComponent,
    Home1Tab1DetailsZeroComponent,
    Home1Tab2Component,
    Home1Tab3Component,
    Home2Component,
    Home3Component,
    AboutComponent,
    About1Component,
    About2Component,
    About3Component,
    ContactComponent,
    Contact1Component,
    Contact2Component,
    Contact3Component,
    EventsComponent,
    Events1Component,
    Events2Component,
    Events3Component,
    ProductsComponent,
    Products1Component,
    Products2Component,
    Products3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
