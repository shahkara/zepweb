import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BootcampComponent } from '../bootcamp/bootcamp.component';

const routes: Routes = [

  {
    path:'',
    component:LayoutComponent
  },{
    path:'bootcamp',
    component:BootcampComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    SlickCarouselModule]
})
export class LayoutRoutingModule { }
