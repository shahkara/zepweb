import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BootcampComponent } from '../bootcamp/bootcamp.component';
import { ZepcodeContactComponent } from '../zepcode-contact/zepcode-contact.component';
import { BootcampContactComponent } from '../bootcamp-contact/bootcamp-contact.component';
import {  ReactiveFormsModule }   from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogsComponent } from '../blogs/blogs.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { DigitalMarketingComponent } from '../digital-marketing/digital-marketing.component';
import { ThankyouComponent } from '../thankyou/thankyou.component';


@NgModule({
  declarations: [
    LayoutComponent,
    BootcampComponent,
    ZepcodeContactComponent,
    BootcampContactComponent,
    BlogsComponent,
    BlogDetailsComponent,
    DigitalMarketingComponent,
    ThankyouComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    
    
  ]
})
export class LayoutModule { }
