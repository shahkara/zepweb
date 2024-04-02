import { Component , OnInit} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  
} from '@angular/forms';
import { SeriveService } from '../serive.service';
import Swal from 'sweetalert2'
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


  contactUsForm!: FormGroup;
  errorMessage: any;
  formSubmitted: boolean = false;
  SubmitSuccessful: boolean = false;


  constructor(
    private service: SeriveService,
    private formBuilder: FormBuilder,
    
  ) {}
  ngOnInit(): void {

    this.contactUsForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      mobile_number: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[6-9]\d{9}$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      Message:[''],
      QueryType:' Zepcode Bootcamp Enquiry',

      enquiryFrom: ['Zepcode Bootcamp'],
    });
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


  submit() {
    this.formSubmitted = true;
    if (this.contactUsForm.invalid) {
      return;
    }
    const UserData = { ...this.contactUsForm.value };
    this.service.addUserData(UserData).subscribe(
      (data) => {
        if (data.code === 'SUC-200') {
          this.SubmitSuccessful = true;
          this.contactUsForm.reset();
          this.formSubmitted = false;
          this.showModal = false;

          setTimeout(() => {
            this.SubmitSuccessful = false;
          }, 3000);
        }
      },
      (error) => {
        this.errorMessage = error.error.error;
        console.log(error.error);
        if (error.error.code === 'ERR-400') {
         
          Swal.fire(this.errorMessage);
          return;
        }
      }
    );
  }

  closeToast() {
    this.SubmitSuccessful = false;
  }
  omit_special_char(event: any) {
    var k = event.charCode || event.keyCode
    return (
      ((k >= 65 && k <= 90) || (k >= 97 && k <= 122) || k === 32 || k === 40 || k === 41 || k === 47) &&
      !['@', '#', '$', '%', '&', '*'].includes(String.fromCharCode(k))
    )
  }
}

