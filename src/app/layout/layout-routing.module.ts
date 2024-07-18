import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BootcampComponent } from '../bootcamp/bootcamp.component';
import { ZepcodeContactComponent } from '../zepcode-contact/zepcode-contact.component';
import { BootcampContactComponent } from '../bootcamp-contact/bootcamp-contact.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { DigitalMarketingComponent } from '../digital-marketing/digital-marketing.component';

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
  },
   {
    path:'blogs',
    component:BlogsComponent
  },
   {
   
    path:'blog_Details',
    component:BlogDetailsComponent
  },
   {
 
    path:'blog_Details/:items',
    component:BlogDetailsComponent
  },
  {
    path:'digitalMarketing',
    component:DigitalMarketingComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    SlickCarouselModule]
})
export class LayoutRoutingModule { }
