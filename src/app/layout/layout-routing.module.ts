import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BootcampComponent } from '../bootcamp/bootcamp.component';
import { ZepcodeContactComponent } from '../zepcode-contact/zepcode-contact.component';
import { BootcampContactComponent } from '../bootcamp-contact/bootcamp-contact.component';

const routes: Routes = [

  {
    path:'',
    component:LayoutComponent
  },{
    path:'bootcamp',
    component:BootcampComponent
  },{
    path:'contactUs',
    component:ZepcodeContactComponent
  },
  {
    path:'contact',
    component:BootcampContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    SlickCarouselModule]
})
export class LayoutRoutingModule { }
