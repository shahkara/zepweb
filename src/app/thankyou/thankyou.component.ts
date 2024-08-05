import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent  implements OnInit{
  private static scriptAdded = false;
  private static conversionAdded = false;
  constructor(  private router: Router,  private renderer: Renderer2,   private location: Location){}
  ngOnInit(): void {
    setTimeout(() => {
    
    
      this.location.back();
    }, 4000);
    this.addGtagInlineScript()
    this.addGtagReportConversionFunction()
  }
  addGtagInlineScript(): void {
    if (ThankyouComponent.scriptAdded) {
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
    ThankyouComponent.scriptAdded = true;
  }
   
  addGtagReportConversionFunction(): void {
    if (ThankyouComponent.conversionAdded) {
      return;
    }
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
  
   script.text=`gtag('event', 'conversion', {'send_to': 'AW-11008461029/8qmlCO7ah40ZEOWRn4Ep'});`
  
    this.renderer.appendChild(document.head, script);
    ThankyouComponent.conversionAdded = true;
  }

}
