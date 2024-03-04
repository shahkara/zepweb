import { Component ,OnInit} from '@angular/core';
import { initFlowbite } from 'flowbite';

interface slider {
  img: string;
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  slides: slider[] = [
    {img: '/assets/slider/image1.png'},
    {img: '/assets/slider/image2.png'},
    {img: '/assets/slider/image3.png'},
    {img: '/assets/slider/image4.png'},
    {img: '/assets/slider/image5.png'},
    
  ];
  slideConfig = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 1,
    centerMode: true,
    cssEase: 'linear',

    "variableWidth": true,

    initialSlide: 1,
    arrows: false,
    buttons: false,
    slidesToShow: 4,
    slidesToScroll: 1,

    infinite: true,
  }

  constructor(){}
  ngOnInit(): void {
    initFlowbite();

  }


}
