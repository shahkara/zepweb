import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BootcampComponent } from '../bootcamp/bootcamp.component';


@NgModule({
  declarations: [
    LayoutComponent,
    BootcampComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    
  ]
})
export class LayoutModule { }
