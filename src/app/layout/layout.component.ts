import { Component ,OnInit} from '@angular/core';
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
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  contactUsForm!: FormGroup;
  errorMessage: any;
  formSubmitted: boolean = false;
  SubmitSuccessful: boolean = false;
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


  constructor(  private service: SeriveService,
    private formBuilder: FormBuilder,){}
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
      Message: [''],
      QueryType:'Other',
      enquiryFrom: ['Zepcode'],
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
          }, 5000);
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
