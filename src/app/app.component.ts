import { Component, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // title = 'zepcode';
  navbarOpen = false;
  constructor(
   
    private title: Title,
    private meta: Meta,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('MERN Full Stack Web Development Course - Zepcode')
   
      this.meta.updateTag({ name: 'title', content:`MERN Full Stack Web Development Course - Zepcode` });
      this.meta.updateTag({ name: 'description', content: ` Zepcode offers you the best Mern Full stack web development course in Faridabad. If you want to become a full stack developer, you can contact us.` });
    
    
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavbar() {
    this.navbarOpen = false;
  }

}
