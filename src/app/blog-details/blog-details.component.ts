import { Component, OnInit } from '@angular/core';
import { SeriveService } from '../serive.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent  implements OnInit{
  BlogData: any;
  id: any;

  constructor( private service:SeriveService ,    private activatedRoute: ActivatedRoute, private meta: Meta,
    private title: Title, ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
   this.id = params['items'];
    
    });
   this.getblogs() 
  }
  getblogs(){
    this.service.getBlogBySlug(this.id).subscribe((data)=>{
      if(data.code=='SUC-200'){
        this.BlogData= data.blogData
        console.log(this.BlogData.imageURL)
        this.updateMetaTags();
      }
      console.log(data) 
    })
  }

  updateMetaTags() {
    this.title.setTitle(this.BlogData.metaTitles)
    this.meta.updateTag({ name: 'title', content: this.BlogData.metaTitles, });
    this.meta.updateTag({ name: 'description', content: this.BlogData.metaDescription, });
    this.meta.updateTag({ name: 'Keywords', content: this.BlogData.metaKeywords, });
    this.meta.updateTag({ property: 'og:title', content: this.BlogData.metaTitles });
    this.meta.updateTag({ property: 'og:description', content: this.BlogData.metaDescription });
    this.meta.updateTag({ property: 'og:image', content: this.BlogData.imageURL || '/assets/logo/logo.png' });
  
   
  }

}
