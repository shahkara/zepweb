import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BootcampComponent } from '../bootcamp/bootcamp.component';
import { ZepcodeContactComponent } from '../zepcode-contact/zepcode-contact.component';
import { BootcampContactComponent } from '../bootcamp-contact/bootcamp-contact.component';
import {  ReactiveFormsModule }   from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    LayoutComponent,
    BootcampComponent,
    ZepcodeContactComponent,
    BootcampContactComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    
    
  ]
})
export class LayoutModule { }
