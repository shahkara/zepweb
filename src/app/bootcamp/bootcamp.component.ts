import { Component , OnInit} from '@angular/core';

interface slider {
  img: string;
}
interface accordionItem {
  title: string;
  description:string;
}

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent  implements OnInit{

  slides: slider[] = [
    {img: '/assets/bootcampPage/ExpediaLogo.png'},
    {img: '/assets/bootcampPage/Infosys_logo.png'},
    {img: '/assets/bootcampPage/Paytm_Logo.png'},
    {img: '/assets/bootcampPage/leamComputers.png'},
    {img: '/assets/bootcampPage/TCS.png'},
    {img: '/assets/bootcampPage/Oracle_logo.png'},
  
    
  ];

  accordionItems: accordionItem[] = [
    {title:'What  is the duration of the bootcamp?', description:"Full Stack  Web Development Bootcamps typically range from 600 hours." },
    {title:'What kind of Projects will i work on during the Bootcamp ?', description:"Bootcamps often includes hands-on projects that mimic real-world web development scenarios, which you can showcase in your portfolio." },
    {title:' Who  is this course for?', description:"This course is suitable for beginners  with no prior coding experience and for those with some coding knowledge who want to become proficient in full stack development." },
    {title:' What will i be able to create after this course?', description:" You'll be able to develop full-fledged web applications, including interactive  user interfaces and server-side functionality " },
    {title:' What  sets this bootcamp apart from self-studey or traditional education?', description:" Bootcamps offer a structured, hands-on approach to learning with industry-relevent projects and mentorship, providing  a more efficient path to becoming job-ready  " },
   
  
    
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
}
