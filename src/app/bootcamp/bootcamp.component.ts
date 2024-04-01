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
  showModal=false
  slides: slider[] = [
    {img: '/assets/bootcampPage/ExpediaLogo.png'},
    {img: '/assets/bootcampPage/Infosys_logo.png'},
    {img: '/assets/bootcampPage/Paytm_Logo.png'},
    {img: '/assets/bootcampPage/leamComputers.png'},
    {img: '/assets/bootcampPage/TCS.png'},
    {img: '/assets/bootcampPage/Oracle_logo.png'},
  
    
  ];

  accordionItems: accordionItem[] = [
    {title:'Who is MERN Stack Bootcamp for?', description:"This bootcamp is ideal for beginners who want to learn full-stack web development or experienced developers looking to expand their skill set to include MERN stack technologies." },
    {title:'What will I learn in the MERN Stack Bootcamp?', description:"Participants will learn how to set up a development environment, build RESTful APIs using Node.js and Express.js, create dynamic front-end interfaces with React, and integrate MongoDB for database management." },
    {title:' Will I receive a certificate upon completion of the bootcamp?', description:"Yes, participants who successfully complete the bootcamp will receive a certificate of completion, which can be a valuable addition to their resume." },
    {title:' Can I work on real-world projects during the bootcamp?', description:" Yes, hands-on projects are often an integral part of MERN Stack Bootcamps. These projects allow participants to apply their newly acquired skills to real-world scenarios, building a portfolio of work to showcase to potential employers. " },
   
  
    
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


