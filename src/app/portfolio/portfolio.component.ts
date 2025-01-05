import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
check:boolean=false;
str:string="";

click(src:string):void{
this.check=true
this.str=src;

}
out():void{
  this.check=false;
 
}


}
