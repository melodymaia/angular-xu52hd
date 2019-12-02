import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import urlData from '../../assets/data/urldata.json';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  urlList: any = urlData;
  urlPresent = null;

  checkUrl(urlData){
      for (let domains of this.urlList){
     if (domains.domainname==urlData.urlQuery){
       this.urlPresent=true;
       return this.urlPresent;
       break;
     }
   }
   this.urlPresent=false;
   return this.urlPresent;
  }

  constructor(
    ) {
  

     }

  ngOnInit() {
  }

}