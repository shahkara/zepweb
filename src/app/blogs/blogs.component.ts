import { Component, OnInit } from '@angular/core';
import { SeriveService } from '../serive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  BlogData: any;

    currentPage!: number;
    totalPages!: number;
    totalItems!:number; 
    itemsPerPage!:number 
  constructor( private service:SeriveService, private route:Router ){}
  ngOnInit(): void {
   this.getblogs() 
  }
  getblogs(){
    this.service.getZepcodeBlogs(this.currentPage).subscribe((data)=>{
      if(data.code=='SUC-200'){
        this.BlogData= data.BlogData
        this.currentPage= data.page
this.totalItems= data.totalItems
this.itemsPerPage=data.itemsPerPage
this.totalPages=data.totalPages
      }
      console.log(data) 
    })
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.getblogs();
  }


  gotoDetails(id:any){
    console.log(id)
    this.route.navigate(['blog_Details',id])
  }
}
