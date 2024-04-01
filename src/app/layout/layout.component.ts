import { Component ,OnInit} from '@angular/core';

interface slider {
  img: string;
}

interface accordionItem {
  title: string;
  description:string;
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  showModal = false;

  slides: slider[] = [
    {img: '/assets/slider/image1.png'},
    {img: '/assets/slider/image2.png'},
    {img: '/assets/slider/image3.png'},
    {img: '/assets/slider/image4.png'},
    {img: '/assets/slider/image5.png'},
    
  ];

  accordionItems: accordionItem[] = [
    {title:'What is ZepCode?', description:"ZepCode is a product-based company known for its innovative solutions in various industries." },
    {title:'What if I encounter issues with a ZepCode product?', description:"If you experience any issues with a ZepCode product, our customer support team is available 24/7 to assist you." },
    {title:' Is there a loyalty program for ZepCode customers?', description:"Yes, ZepCode offers a loyalty program for regular customers, providing exclusive benefits, discounts, and rewards for continued support.." },
   
  
    
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
  activeIndex: number | null = null;


  constructor(){}
  ngOnInit(): void {

  }
  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  openModal() {
    this.showModal = true;

  }

  closeModal() {
    this.showModal = false;

  }

}
