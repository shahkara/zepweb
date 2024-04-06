import { Component , OnInit} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  
} from '@angular/forms';
import { SeriveService } from '../serive.service';
import Swal from 'sweetalert2'
import { initFlowbite } from 'flowbite'

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
  skills: skill[] = [
    {name: ' Linux Shell Scripting'},
    {name: ' DSA'},
    {name: ' Spring Boot'},
    {name: ' Operating Systems'},
    {name: ' Rest API'},
    {name: ' Git'},
    {name: ' Networks'},
    {name: ' Design Patterns'},
    {name: ' OOPs'},
    {name: ' SQL'},
    {name: ' System Design'},
    
 ];  
 Outcomes: Outcome[] = [
    {name: ' 	Learn how to use Linux commands and scripts to automate tasks.'},
    {name: ' 	Master Git for managing code and collaborating on team projects.'},
    {name: ' 	Excel in coding interviews by solving complex problems using Data Structures and Algorithms.'},
    {name: ' 	Understand SQL for managing databases and designing schemas effectively.'},
    {name: ' 	Build robust REST APIs for web applications using the Spring Boot framework.'},
    {name: ' 	Discover AI tools to enhance coding efficiency.'},
    {name: ' 	Learn System Design for creating scalable and fault-tolerant systems.'},
    {name: ' 	Create a strong resume and GitHub profile to impress employers.'},
    {name: ' 	Practice mock interviews with industry experts for real-life experience.'},
  
    
 ]; 
 MASTERCLASSlists: MASTERCLASSlist[] = [
    {name: ' Learn from the Pros, master the Basics'},
    {name: ' Kickstart Your Career with Expert Guidance'},
    {name: ' Solve Real-Life Challenges with Live Experts'},
    {name: ' Get your questions answered by interacting with mentors'},
    
    
 ]; CERTIFICATIONLists: CERTIFICATIONList[] = [
    {name: ' Certification accepted by 300+ companies'},
    {name: ' Show employers your certified skills'},
    {name: ' Attract recruiters on LinkedIn with your certifications'},
    
    
 ];AlumniSupports: AlumniSupport[] = [
    {name: ' 	Life long engagement of Zepcode with the student'},
    {name: ' 	Free exclusive Zepcode’s Alumni Membership valued at 15k'},
    {name: ` 	1000 of zepcode's alumni network `},
    {name: '	Opportunity to stay in touch with zepcode alumni network'},
    
    
 ];
 learningToEarnLists: learningToEarnList[] = [
    {name: ' 	40 hours'},
    {name: ' 6 months'},
    {name: ' 	1  year'},
    {name: ' 	Industry experts (Avg exp. > 5 yrs)'},
    {name: ' 	Industry aligned'},
    {name: ' 	Active '},
    
    
 ];
courseLists: courseList[] = [
  {coursecount:1,
    name: 'Javascript Fundamental Concept',
  time:'3 week', 
  courseheading:'Master JavaScript Fundamentals to Enhance Problem-Solving and WebDevelopment Skills' ,
  chapter: [
    { chaptername: "Introduction to JavaScript", chapternumber: 1 },
    { chaptername: "Variables, data types, and operators", chapternumber: 2 },
    { chaptername: "Control flow (if statements, loops, switch statements)", chapternumber: 3 },
    { chaptername: "Functions and scope", chapternumber: 4},
    { chaptername: "Arrays and array methods", chapternumber: 5},
    { chaptername: "Objects and object-oriented programming concepts", chapternumber: 6},
    { chaptername: "Error handling (try...catch) ", chapternumber: 7},
    { chaptername: "Asynchronous JavaScript and the event loop ", chapternumber: 8},
    { chaptername: "Callbacks and higher-order functions ", chapternumber: 9},
    { chaptername: "Promises and async/await for handling asynchronous operations", chapternumber: 10},
    { chaptername: "Modules and module loaders (CommonJS, ES6 Modules) ", chapternumber: 11},
    { chaptername: "Understanding the DOM (Document Object Model)", chapternumber: 12},
    { chaptername: "Manipulating the DOM with JavaScript", chapternumber: 13},
    { chaptername: "Event handling", chapternumber: 14},
    { chaptername: "Form validation and manipulation", chapternumber: 15},
    { chaptername: "Local storage and session storage ", chapternumber: 16},
    { chaptername: "Fetch API for making HTTP requests ", chapternumber: 17},
    { chaptername: "Browser compatibility and polyfills ", chapternumber: 18},
    { chaptername: "Working with JSON data ", chapternumber: 19},
    { chaptername: "Debugging JavaScript code (browser developer tools, console.log()  ", chapternumber: 20},
    { chaptername: "Testing JavaScript code (unit tests, integration tests, etc.) ", chapternumber: 21},
  
  ]
},
{coursecount:2,
  name: 'Advanced Javascript Concepts',
time:'3 week', 
courseheading:'Boost Your Web Development Skills with Advanced JavaScript Concepts for Better Problem-Solving' ,
chapter: [
  { chaptername: "Prototypes and inheritance", chapternumber: 1 },
  { chaptername: "Advanced array methods (map, reduce, filter)", chapternumber: 2 },
  { chaptername: "Closures and lexical scope", chapternumber: 3 },
  { chaptername: "Function currying and partial application", chapternumber: 4},
  { chaptername: "Memorization and performance optimization techniques  ", chapternumber: 5},
  { chaptername: "Functional programming concepts", chapternumber: 6},
  { chaptername: "Design patterns in JavaScript ", chapternumber: 7},
  { chaptername: "Understanding this keyword and context binding  ", chapternumber: 8},
  { chaptername: "Memory management and garbage collection ", chapternumber: 9},
  { chaptername: "Web Workers for concurrent processing", chapternumber: 10},
  { chaptername: "Promises chaining and error handling strategies  ", chapternumber: 11},


]
},
{coursecount:3,
  name: 'Express.js',
time:'3 week', 
courseheading:'Master Express.js Fundamentals to Enhance Problem-Solving and Web Development Skills' ,
chapter: [
  { chaptername: "Introduction to Express.js framework", chapternumber: 1 },
  { chaptername: "Setting up an Express.js project", chapternumber: 2 },
  { chaptername: "Routing and middleware concepts  ", chapternumber: 3 },
  { chaptername: "Handling HTTP requests and responses  ", chapternumber: 4},
  { chaptername: "Template engines (e.g., Handlebars, EJS)  ", chapternumber: 5},
  { chaptername: "Error handling and debugging", chapternumber: 6},
  { chaptername: "RESTful API development ", chapternumber: 7},
  { chaptername: "Authentication and authorization  ", chapternumber: 8},
  { chaptername: "Working with static files ", chapternumber: 9},
  { chaptername: "Using third-party middleware", chapternumber: 10},
  { chaptername: "Express.js generators and scaffolding tools  ", chapternumber: 11},
  { chaptername: "Security considerations  ", chapternumber: 12},
  { chaptername: "Deployment strategies  ", chapternumber: 13},


]
},
{coursecount:4,
  name: 'React.js',
time:'3 week', 
courseheading:'Boost Your Web Development Abilities with React.js Fundamentals for Improved Problem-Solving' ,
chapter: [
  { chaptername: "Introduction to React.js and its core concepts", chapternumber: 1 },
  { chaptername: "JSX syntax and component-based architecture", chapternumber: 2 },
  { chaptername: "Setting up a React.js project  ", chapternumber: 3 },
  { chaptername: "State and props management  ", chapternumber: 4},
  { chaptername: "Handling events and forms  ", chapternumber: 5},
  { chaptername: "React Router for client-side routing", chapternumber: 6},
  { chaptername: "Working with hooks (useState, useEffect, etc.) ", chapternumber: 7},
  { chaptername: "Context API for state management  ", chapternumber: 8},
  { chaptername: "Component composition and reusability ", chapternumber: 9},
  { chaptername: "Handling HTTP requests with Axios or Fetch API", chapternumber: 10},
  { chaptername: "Forms validation  ", chapternumber: 11},
  { chaptername: "Styling React applications (CSS, CSS-in-JS, Styled Components)  ", chapternumber: 12},
  { chaptername: "State management libraries like Redux or MobX (optional)  ", chapternumber: 13},
  { chaptername: "Testing React components  ", chapternumber: 14},
  { chaptername: "Performance optimization techniques  ", chapternumber: 15},


]
},
{coursecount:5,
  name: 'Node.js',
time:'3 week', 
courseheading:'Strengthen your problem-solving and web development skills with Node.js fundamentals mastery' ,
chapter: [
  { chaptername: "Introduction to Node.js and asynchronous programming  ", chapternumber: 1 },
  { chaptername: "Setting up a Node.js project  ", chapternumber: 2 },
  { chaptername: "Node.js modules and package management (npm/yarn)  ", chapternumber: 3 },
  { chaptername: "File system operations  ", chapternumber: 4},
  { chaptername: "Working with streams and buffers  ", chapternumber: 5},
  { chaptername: "Events and event-driven architecture", chapternumber: 6},
  { chaptername: "HTTP module and creating web servers", chapternumber: 7},
  { chaptername: "RESTful API development with Express.js  ", chapternumber: 8},
  { chaptername: "Working with databases (MongoDB, MySQL, etc.)  ", chapternumber: 9},
  { chaptername: "Authentication and authorization with JWT", chapternumber: 10},
  { chaptername: "Error handling and debugging  ", chapternumber: 11},
  { chaptername: "Asynchronous control flow (callbacks, Promises, async/await)  ", chapternumber: 12},
  { chaptername: "Child processes and cluster module for scaling ", chapternumber: 13},
  { chaptername: "Security best practices  ", chapternumber: 14},
  { chaptername: "Deployment strategies and hosting options ", chapternumber: 15},


]
},
{coursecount:6,
  name: 'MongoDB',
time:'3 week', 
courseheading:'Explore MongoDB and Simplifying Data Management with Flexibility and Scalability' ,
chapter: [
  { chaptername: "Introduction to NoSQL databases  ", chapternumber: 1 },
  { chaptername: "Understanding MongoDB and its features  ", chapternumber: 2 },
  { chaptername: "Installation and setup  ", chapternumber: 3 },
  { chaptername: "CRUD operations (Create, Read, Update, Delete)  ", chapternumber: 4},
  { chaptername: "Data modeling and schema design  ", chapternumber: 5},
  { chaptername: "Indexing and query optimization", chapternumber: 6},
  { chaptername: "Aggregation framework", chapternumber: 7},
  { chaptername: "Working with BSON data types  ", chapternumber: 8},
  { chaptername: "MongoDB Atlas - cloud database service ", chapternumber: 9},
  { chaptername: "Data replication and sharding", chapternumber: 10},
  { chaptername: "Security best practices ", chapternumber: 11},
  { chaptername: "Backup and restoration techniques ", chapternumber: 12},
  { chaptername: "Real-world use cases and examples  ", chapternumber: 13}



]
},
{coursecount:7,
  name: 'Advanced System Design',
time:'3 week', 
courseheading:'Advance Your Skills in System Design to Create Strong Architectures for Scalable Solutions' ,
chapter: [
  { chaptername: "AWS(EC2)  ", chapternumber: 1 },
  { chaptername: "Nginx  ", chapternumber: 2 },
  { chaptername: "Load balancing  ", chapternumber: 3 },
  { chaptername: "Api gateways  ", chapternumber: 4},
  { chaptername: "Scalable Architechture  ", chapternumber: 5},
 



]
},
{coursecount:8,
  name: 'Mastering Git',
time:'3 week', 
courseheading:'Become a Git guru, mastering everything from basic commits to advanced techniques for teamwork and collaboration on GitHub' ,
chapter: [
  { chaptername: "Introduction to Git", chapternumber: 1 },
  { chaptername: "Git Basics  ", chapternumber: 2 },
  { chaptername: "Branching in Git  ", chapternumber: 3 },
  { chaptername: "Merging with Git  ", chapternumber: 4},
  { chaptername: "Git Stashing  ", chapternumber: 5},
  { chaptername: "Git Resetting  ", chapternumber: 6},
  { chaptername: "Team Collaboration with Git and GitHub", chapternumber: 7},
  { chaptername: "Advanced Git Techniques  ", chapternumber: 8}
 



]
}
  
  
];

  accordionItems: accordionItem[] = [
    {title:'How does Zepcode maintain long-term engagement with students?', description:"Zepcode ensures ongoing engagement through regular updates, alumni events, and exclusive membership benefits." },
    {title:'How does Zepcode support alumni in their career advancement?', description:"At Zepcocde, we help you navigate your career path by offering guidance, assisting with job placements, and connecting you with job opportunities through our industry connections.  " },
    {title:' How can I access the career guidance and job placement assistance offered by Zepcode?', description:"Zepcode provides career guidance and job placement assistance through dedicated advisors who work with you one-on-one to understand your career goals and assist you in securing relevant job opportunities. " },
    {title:` Are there any fees associated with accessing SkilloVilla's career services?`, description:"No, Zepcode's career services, including career guidance, job placement assistance, and access to job openings, are provided to alumni at no additional cost. " },
   
  
    
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
  activeIndexCourse: number | null = null;


  contactUsForm!: FormGroup;
  errorMessage: any;
  formSubmitted: boolean = false;
  SubmitSuccessful: boolean = false;


  constructor(
    private service: SeriveService,
    private formBuilder: FormBuilder,
    
  ) {}
  ngOnInit(): void {
    initFlowbite();

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
   toggleAccordionCourse(index: number): void {
    this.activeIndexCourse = this.activeIndexCourse === index ? null : index;
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

