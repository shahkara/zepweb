import { Component , OnInit, Renderer2} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  
} from '@angular/forms';
import { SeriveService } from '../serive.service';
import Swal from 'sweetalert2'
import { initFlowbite } from 'flowbite'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';



interface slider {
  img: string;
}
interface skill {
  name: string;
}interface Outcome {
  name: string;
}interface MASTERCLASSlist {
  name: string;
}interface CERTIFICATIONList {
  name: string;
}interface AlumniSupport {
  name: string;
}interface learningToEarnList {
  name: string;
}
interface courseList {
  coursecount:number;
  name: string;
  time:string;
  courseheading:string;
  chapter: {
    chaptername: string;
    chapternumber: number;
  }[];
}
interface Mentor{
  id:any;
  img:string;
  name: string;
  company:string;
  experiennce:string;
 
}
interface testimonial{
  id:any;
  img:string;
  name: string;
  company:string;
  message:string;
 
}
interface accordionItem {
  title: string;
  description:string;
}
@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.scss']
})
export class DigitalMarketingComponent  implements OnInit{

  LearningSupport:boolean=false
  DoubtResolution:boolean=false
  IndustryNetworking:boolean=false
  showModal=false
  slides: slider[] = [
    {img: '/assets/bootcampPage/ExpediaLogo.png'},
    {img: '/assets/bootcampPage/Infosys_logo.png'},
    {img: '/assets/bootcampPage/Paytm_Logo.png'},
    {img: '/assets/bootcampPage/leamComputers.png'},
    {img: '/assets/bootcampPage/TCS.png'},
    {img: '/assets/bootcampPage/Oracle_logo.png'},
  
    
  ];
  skills: skill[] = [
    {name: 'Marketing Overview '},
    {name: ' SEO'},
    {name: ' 	Social Media Marketing'},
    {name: ' 	Google Ads'},
    {name: ' Youtube Marketing'},
    {name: ' 	Email Marketing'},
    {name: ' Ecommerce Marketing'},
    {name: '	Google Adsence'},
    {name: 'Affiliate Marketing'},
    {name: ' 	Social Media Optimization'},
   
    {name: ' Freelancing'},
    
   
    
 ]; 
  Mentors: Mentor[] = [
    { id:1,name: ' Gautam Joshi',img:'/assets/mentors/GautamJoshi.webp', company: 'Sifar',experiennce:'25 Years'},
     { id:2,name: ' Amit kumar',img:'/assets/mentors/Amitkumar.webp',company: 'Co-Founder and  Director  at Sigma Power Tech Pvt. Ltd.',experiennce:'10 Years'},
    { id:3,name: 'BINIT KUMAR', img:'/assets/mentors/BINITKUMAR.webp',company: 'Smart Brains',experiennce:'13 Years'},
    { id:4, name: 'Chandan Pandit ',img:'/assets/mentors/ChandanPandit.webp',company: 'Expedia',experiennce:'11 Years'},
    {id:5, name: 'Shahkar Ahmed ',img:'/assets/mentors/ShahkarAhmed.webp',company: 'Onetick Technologies',experiennce:'10 Years'},
    { id:6, name: 'Shankar Dayal ',img:'',company: 'Adobe',experiennce:'20 Years'},
    {id:7, name: 'Amod Sharma ',img:'/assets/mentors/amodsharma.png',company: 'Onetick Technologies',experiennce:'15+ Years'},
    { id:8, name: 'Lalit Verma ',img:'/assets/mentors/LalitVerma.webp',company: 'Oracle Corporation, USA',experiennce:'25 Years'},
    { id:9, name: 'Dinesh Sharma ',img:'/assets/mentors/DineshSharma.webp',company: 'Onetick Technologies',experiennce:'11 Years'},
    { id:10, name: 'Garima Sharma',img:'/assets/mentors/GarimaSharma.webp',company: 'EY',experiennce:'10 Years'},
    
    
 ]; 
  testimonials: testimonial[] = [
    { id:1,name: ' Rajkumar  Chaudhary',img:'/assets/bootcampPage/defaultUser.png', company: ' Dexbean Technologies',message:`This digital marketing bootcamp was a game-changer for me. The hands-on projects and expert guidance helped me a lot to land my dream job.`},
     { id:2,name: '  Ravi Rana',img:'/assets/bootcampPage/defaultUser.png',company: 'SISL Infotech Pvt. Ltd.',message:`I learned so much in such a short time. The instructors were knowledgeable and supportive, and now I feel confident in my digital marketing skills.`},
    { id:3,name: ' Rahul', img:'/assets/bootcampPage/defaultUser.png',company: 'Website Tool Box India ',message:`	I highly recommend this bootcamp to anyone looking to dive into digital marketing. The course content was relevant and up-to-date with industry trends.`},
    { id:4, name: 'Akash ',img:'/assets/bootcampPage/defaultUser.png',company: 'Onetick Technologies',message:`Thanks to this bootcamp, I was able to improve my marketing strategies and see immediate results. It was a fantastic investment in my career.`},
   
    
 ];  
 Outcomes: Outcome[] = [
    {name: ' 	Master Git for managing code and collaborating on team projects.'},
    {name: ' 	Excel in coding interviews with Data Structures and Algorithms training.'},
    {name: ' 	Understand SQL for effective database management.'},
    {name: ' 	Create and build responsive UI design and screens.'},
    {name: ' 	Build robust REST APIs using the Nodejs and express.'},
    {name: '  Explore AI tools to boost coding efficiency.'},
    {name: ' 	Learn system design for scalable and fault – tolerant systems.'},
    {name: ' 	Craft a compelling resume and GitHub profile to impress employers.'},
    {name: ' 	Practice mock interviews with industry experts for real-life experience in our web development course.'},
  
    
 ]; 
 MASTERCLASSlists: MASTERCLASSlist[] = [
    {name: ' Learn from the Pros, master the Basics'},
    {name: ' Kickstart Your Career with Expert Guidance'},
    {name: ' Solve Real-Life Challenges with Live Experts'},
    {name: ' Get your questions answered by interacting with mentors'},
    
    
 ];
  CERTIFICATIONLists: CERTIFICATIONList[] = [
    {name: ' 	Get certified by over 300 respected companies.'},
    {name: ' 	Show employers you have the skills they need.'},
    {name: ' Boost your credibility with industry-standard certifications.'},
    {name: ' Gain an edge in job applications and career growth.'},
    {name: ' 	Connect with a network of certified professionals for more opportunities.'},
    
    
    
 ];
 AlumniSupports: AlumniSupport[] = [
    {name: ' 	Life long engagement of Zepcode with the student'},
    {name: ' 	Free exclusive Zepcode’s Alumni Membership valued at 15k'},
    {name: ` 	1000’s of zepcode's alumni network `},
    {name: '	Opportunity to stay in touch with zepcode alumni network'},
    
    
 ];
 learningToEarnLists: learningToEarnList[] = [
    
    {name: ' 	Yes'},
    {name: ' 	40 hours/week'},
    {name: ' 6 months'},
    {name: ' 	Guaranteed '},
    {name: ' 	Industry experts (Avg exp. > 5 yrs)'},
    {name: ' 	Industry Aligned'},
    {name: ' 	1 year '},
    {name: ' 	Yes  '},
    
    
 ];
courseLists: courseList[] = [
  {coursecount:1,
    name: 'Digital Marketing Overview',
  time:'3 week', 
  courseheading:'Learn digital marketing basics to improve your problem-solving and campaign skills' ,
  chapter: [
    { chaptername: "What is Marketing", chapternumber: 1 },
    { chaptername: "What is Digital Marketing", chapternumber: 2 },
    { chaptername: "Why Digital Marketing", chapternumber: 3 },
    { chaptername: "Digital Marketing vs Traditional Marketing", chapternumber: 4},
    { chaptername: "Scope of Digital Marketing", chapternumber: 5},
    { chaptername: "Digital Marketing Platforms", chapternumber: 6},
    { chaptername: "Latest Digital Marketing Trends ", chapternumber: 7},

  
  ]
},
{coursecount:2,
  name: 'Search Engine  Basics',
time:'3 week', 
courseheading:`Improve your website's visibility with SEO techniques` ,
chapter: [
  { chaptername: "What is Search Engine", chapternumber: 1 },
  { chaptername: "How Search Engine Works", chapternumber: 2 },
  { chaptername: "What is Spider", chapternumber: 3 },
  { chaptername: "What is Crawling", chapternumber: 4},
  { chaptername: "What is Indexing ", chapternumber: 5},



]
},
{coursecount:3,
  name: 'Domain & Hosting',
time:'3 week', 
courseheading:'Launch Your Online Success Story, Powered by Secure Domain and Hosting' ,
chapter: [
  { chaptername: "Domain name & Extension", chapternumber: 1 },
  { chaptername: "What is Web Server and Web Hosting", chapternumber: 2 },
  { chaptername: "How to Book a Domain ", chapternumber: 3 },
  { chaptername: "How to Book a Hosting ", chapternumber: 4},



]
},
{coursecount:4,
  name: 'Keyword Research',
time:'3 week', 
courseheading:'Transform your digital skills by learning essential marketing techniques' ,
chapter: [
  { chaptername: "What is Keywords", chapternumber: 1 },
  { chaptername: "Types of Keywords", chapternumber: 2 },
  { chaptername: "Tools For Keywords Research ", chapternumber: 3 },
  { chaptername: "How to Choose the Right Keywords ", chapternumber: 4},
  { chaptername: "Keywords Competition ", chapternumber: 5},
  { chaptername: "Localized Keyword Research", chapternumber: 6},
  


]
},
{coursecount:5,
  name: 'On-Page SEO',
time:'3 week', 
courseheading:'Master your Online Presence by diving deep into On-Page SEO techniques' ,
chapter: [
  { chaptername: "Introduction to On page optimization", chapternumber: 1 },
  { chaptername: "What is Meta Title", chapternumber: 2 },
  { chaptername: "What is Meta Description ", chapternumber: 3 },
  { chaptername: "Meta Title & Description Length  ", chapternumber: 4},
  { chaptername: "H1 to H6 Tags and their importance ", chapternumber: 5},
  { chaptername: "When and where keywords can be placed", chapternumber: 6},
  { chaptername: "Internal Linking", chapternumber: 7},
  { chaptername: "External Linking", chapternumber: 8},
  { chaptername: "Alt Tag Optimization", chapternumber: 9},
  { chaptername: "Content Optimization", chapternumber: 10},
  { chaptername: "URL Structure Optimization", chapternumber: 11},
  { chaptername: "Website structure & navigation", chapternumber: 12},
  { chaptername: "Robots.txt File", chapternumber: 13},
  { chaptername: "Sitemap.xml File ", chapternumber: 14},
  { chaptername: "Canonical Tag", chapternumber: 15},
  { chaptername: "Broken Links", chapternumber: 16},
  { chaptername: "Difference between HTTP/HTTPS", chapternumber: 17},
  { chaptername: "Redirection Error", chapternumber: 18},
  { chaptername: "Keyword Density", chapternumber: 19},
  { chaptername: "Website Speed", chapternumber: 20},
  { chaptername: "Mobile Responsive", chapternumber: 21},


]
},
{coursecount:6,
  name: 'Off-Page SEO',
time:'3 week', 
courseheading:'Boost your online impact with off-page SEO Techniques' ,
chapter: [
  { chaptername: "Profile Submission", chapternumber: 1 },
  { chaptername: "Business Listing Submission ", chapternumber: 2 },
  { chaptername: "Bookmarking", chapternumber: 3 },
  { chaptername: "Classifieds Submission ", chapternumber: 4},
  { chaptername: "Social Sharing", chapternumber: 5},
  { chaptername: "Image Submission", chapternumber: 6},
  { chaptername: "Ppt Submission", chapternumber: 7},
  { chaptername: "Pdf Submission ", chapternumber: 8},
  { chaptername: "Video Submission", chapternumber: 9},
  { chaptername: "Blog Posting", chapternumber: 10},
  { chaptername: "Article Posting ", chapternumber: 11},
  { chaptername: "Web 2.0", chapternumber: 12},
  { chaptername: "Guest Posting", chapternumber: 13},
  { chaptername: "Directory Submission", chapternumber: 14},
  { chaptername: "Forum Posting", chapternumber: 14},



]
},
{coursecount:7,
  name: 'SEO Algorithms',
time:'3 week', 
courseheading:'Learn SEO algorithms to enhance  your skills' ,
chapter: [
  { chaptername: "Google Panda", chapternumber: 1 },
  { chaptername: "Google Penguin ", chapternumber: 2 },
  { chaptername: "Google HummingBird", chapternumber: 3 },
  { chaptername: "Mobile Friendly ", chapternumber: 4},
  { chaptername: "Google Pigeon ", chapternumber: 5},
  { chaptername: "Google Rank Brain", chapternumber: 6},
  { chaptername: "Google Bert Update", chapternumber: 7},
  { chaptername: "Google Fred", chapternumber: 8},
 



]
},
{coursecount:8,
  name: 'Local SEO',
time:'3 week', 
courseheading:'Boost Local Visibility by learning Essential Skills' ,
chapter: [
  { chaptername: "What is Local SEO", chapternumber: 1 },
  { chaptername: "Google My Business Creation ", chapternumber: 2 },
  { chaptername: "Completing the profile ", chapternumber: 3 },
  { chaptername: "Business Listing Submission  ", chapternumber: 4},
 
 



]
},{coursecount:9,
  name: 'SEO Concepts',
time:'3 week', 
courseheading:'Master essential SEO concepts for effective online marketing ' ,
chapter: [
  { chaptername: "White Hat SEO", chapternumber: 1 },
  { chaptername: "Black Hat SEO ", chapternumber: 2 },
  { chaptername: "Grey Hat SEO ", chapternumber: 3 },
  { chaptername: "What is SERP", chapternumber: 4},
  { chaptername: "What is Bounce Rate ", chapternumber: 5},
  { chaptername: "Domain Authority ", chapternumber: 6},
  { chaptername: "Page Authority", chapternumber: 7},
 
 



]
},{coursecount:10,
  name: 'Google Search Console',
time:'3 week', 
courseheading:'Learn how to improve your website using Google Search Console insights' ,
chapter: [
  { chaptername: "Setup Google Search Console", chapternumber: 1 },
  { chaptername: "Link Google Search Console to Website ", chapternumber: 2 },
  { chaptername: "Understanding GSC Dashboard ", chapternumber: 3 },
  { chaptername: "How to Track Data in GSC", chapternumber: 4},
  { chaptername: "Indexing", chapternumber: 5},

 



]
},
{coursecount:11,
  name: 'Google Analytics',
time:'3 week', 
courseheading:'Learn how to analyze data with Google Analytics' ,
chapter: [
  { chaptername: "What is Analytics", chapternumber: 1 },
  { chaptername: "Importance of Analytics ", chapternumber: 2 },
  { chaptername: "Google Analytics Setup ", chapternumber: 3 },
  { chaptername: "Track Data in Analytics ", chapternumber: 4},
 
 



]
},
{coursecount:12,
  name: 'Social Media Optimization',
time:'3 week', 
courseheading:'Expand your business reach through effective social media marketing' ,
chapter: [
  { chaptername: "Introduction of SMO", chapternumber: 1 },
  { chaptername: "Reasons of Using SMO ", chapternumber: 2 },
  { chaptername: "Business Page Creation on Social Platforms", chapternumber: 3 },
  { chaptername: "Social Media Posting Optimization ", chapternumber: 4},
  { chaptername: "How to Boost a Post ", chapternumber: 5},
 
 



]
},
{coursecount:13,
  name: 'Social Media Marketing',
time:'3 week', 
courseheading:'Boost Your Online Reach with Social Media Optimization' ,
chapter: [
  { chaptername: "What is Social Media Marketing", chapternumber: 1 },
  { chaptername: "Meta Ads Account Setup", chapternumber: 2 },
  { chaptername: "How to Create Meta Ads", chapternumber: 3 },
  { chaptername: "How to Create Audiance For Meta Ads ", chapternumber: 4},
  { chaptername: "How to Setup Ads", chapternumber: 5},
  { chaptername: "How to optimize Ads", chapternumber: 6},
 
 



]
},
{coursecount:14,
  name: 'Google ads',
time:'3 week', 
courseheading:'Learn how social media ads can grow your business' ,
chapter: [
  { chaptername: "How to Create Google Ads Account", chapternumber: 1 },
  { chaptername: "How to Create Google Search Campaign", chapternumber: 2 },
  { chaptername: "How to Setup Target Keywords", chapternumber: 3 },
  { chaptername: "Keywords Match Type ", chapternumber: 4},
  { chaptername: "How to Setup Headlines and Descriptions ", chapternumber: 5},
  { chaptername: "How to Use Extensions", chapternumber: 6},
  { chaptername: "How to Create Google Display Ads", chapternumber: 7},
  { chaptername: "How to Optimize Google Ads Campaigns", chapternumber: 8},
 
 



]
},
{coursecount:15,
  name: 'Youtube Marketing',
time:'3 week', 
courseheading:'Discover how to promote your business effectively on YouTube' ,
chapter: [
  { chaptername: "How to Create Youtube Channel", chapternumber: 1 },
  { chaptername: "How to Post a Video", chapternumber: 2 },
  { chaptername: "How to Optimize the Video", chapternumber: 3 },
  { chaptername: "How to Create Video Title and Description", chapternumber: 4},

 
 



]
},
{coursecount:16,
  name: 'Email Marketing',
time:'3 week', 
courseheading:'Master how to use email marketing to connect with customers and boost sales' ,
chapter: [
  { chaptername: "Introduction of Email Marketing", chapternumber: 1 },
  { chaptername: "Setup Mailchimp Account", chapternumber: 2 },
  { chaptername: "How to Setup Email ", chapternumber: 3 },
  { chaptername: "How to Send Bulk Emails", chapternumber: 4},
  
 
 



]
},
{coursecount:17,
  name: 'Earning Tools',
time:'3 week', 
courseheading:'Discover essential earning tools for digital success' ,
chapter: [
  { chaptername: "Google Adsence", chapternumber: 1 },
  { chaptername: "Affiliate Marketing", chapternumber: 2 },
  { chaptername: "Freelancing", chapternumber: 3 },

 
 



]
},
  
  
];

  accordionItems: accordionItem[] = [
    {title:'What will I learn in the digital marketing bootcamp?', description:`You will learn the fundamentals of digital marketing, including SEO, social media marketing, content marketing, email marketing, and more. The course also covers practical skills like running campaigns, analyzing data, and optimizing performance.` },
    {title:'Will I work on real-world projects?', description:`Yes, you will work on real-world projects to apply the skills you learn. This hands-on experience is crucial for understanding how digital marketing works in practical scenarios.` },
    {title:'What kind of support will I receive during the bootcamp?', description:`You will have access to instructors, mentors, and a community of fellow learners. There will also be Q&A sessions, forums, and additional resources to support your learning journey.`},
    {title:'What career opportunities can I expect after completing the bootcamp?', description:`Graduates of the bootcamp can pursue careers in various digital marketing roles, such as SEO specialist, social media manager, content marketer, email marketing specialist, and more. The certification and hands-on experience will enhance your resume and job prospects.`},
   
  
    
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      550: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };
  activeIndex: number | null = null;
  activeIndexCourse: number | null = null;


  contactUsForm!: FormGroup;
  contactUsbootcampForm!: FormGroup;
  errorMessage: any;
  formSubmitted: boolean = false;
  formSubmittedbootcamp: boolean = false;
  SubmitSuccessful: boolean = false;
  loading: boolean = false;
  disable=false;
  private static scriptAdded = false;
  constructor(
    private service: SeriveService,
    private formBuilder: FormBuilder,
    private title: Title,
    private router: Router,
    private renderer: Renderer2,
    
    
  ) {}
  ngOnInit(): void {

    this.title.setTitle('Digital Marketing Course in Faridabad - Zepcode')

    initFlowbite();
    this.LearningSupport=true

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
      QueryType:'Zepcode Bootcamp Enquiry',

      enquiryFrom: ['Zepcode Bootcamp'],
    }); 
    this.contactUsbootcampForm = this.formBuilder.group({
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
      QueryType:'Zepcode Bootcamp Enquiry',

      enquiryFrom: ['Zepcode Bootcamp'],
    });
    this.addGtagInlineScript()
  }
  addGtagInlineScript(): void {
    if (DigitalMarketingComponent.scriptAdded) {
      return;
    }
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'AW-11008461029');
    `;
    this.renderer.appendChild(document.head, script);
    DigitalMarketingComponent.scriptAdded = true;
  }

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  } 
   toggleAccordionCourse(index: number): void {
    this.activeIndexCourse = this.activeIndexCourse === index ? null : index;
  }


  LearningSupportMethod(){
    this.LearningSupport=true
    this.DoubtResolution=false
    this.IndustryNetworking=false
  }
  DoubtResolutionMethod(){
    this.DoubtResolution=true
    this.LearningSupport=false
    this.IndustryNetworking=false
  }
  IndustryNetworkingMethod(){
    this.IndustryNetworking=true
    this.DoubtResolution=false
    this.LearningSupport=false
  }

    close(){
    
    this.formSubmitted = false;
    this.contactUsForm.reset()

  }
  submit() {
    this.loading=true
    this.formSubmitted = true;
    if (this.contactUsForm.invalid) {
      this.loading=false
      return;
    }
    const UserData = { ...this.contactUsForm.value };
    this.service.addUserData(UserData).subscribe(
      (data) => {
        if (data.code === 'SUC-200') {
          this.loading= false
          this.SubmitSuccessful = true;
          this.contactUsForm.reset();
          this.formSubmitted = false;
          this.showModal = false;
          this.router.navigate(['thank-you']);
          setTimeout(() => {
            
            window.location.reload()
          }, 1000);

          // Swal.fire("Submitted successfully");
          // Swal.fire({
          //   title: "Submitted successfully",
            
         
          //   confirmButtonText: "ok",
          
          // }).then((result) => {
          //   if (result.isConfirmed) {
          //     window.location.reload()
             
          //   } 
          // });
          setTimeout(() => {
            this.SubmitSuccessful = false;
          }, 3000);
        }
      },
      (error) => {
        this.loading=false
        this.errorMessage = error.error.error;
        // console.log(error.error);
        if (error.error.code === 'ERR-400') {
         
          Swal.fire(this.errorMessage);
          return;
        }
      }
    );
  }
  
  submitform() {
    this.loading=true
    this.formSubmittedbootcamp = true;
    if (this.contactUsbootcampForm.invalid) {
      this.loading=false
      return;
    }
    this.disable=true
    const UserData = { ...this.contactUsbootcampForm.value };
    this.service.addUserData(UserData).subscribe(
      (data) => {
        if (data.code === 'SUC-200') {
          this.loading=false
          this.SubmitSuccessful = true;
          this.disable=true

          this.contactUsbootcampForm.reset();
          this.formSubmittedbootcamp = false;
          this.showModal = false;
          this.router.navigate(['thank-you']);
          setTimeout(() => {
            
            window.location.reload()
          }, 1000);
          // this.router.navigate(['thank-you']);
          // Swal.fire("Thankyou for showing your interest in our bootcamp. Our team will connect with you soon!");
        }
      },
      (error) => {
        this.disable=false
this.loading= false
        this.errorMessage = error.error.error;
        // console.log(error.error);
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

