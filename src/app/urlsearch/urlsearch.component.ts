import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchresultsComponent } from '../searchresults/searchresults.component'


@Component({
  selector: 'app-urlsearch',
  templateUrl: './urlsearch.component.html',
  styleUrls: ['./urlsearch.component.css']
})

export class UrlsearchComponent {
  urlForm;
  urlPresent = null;
  
  constructor(
    private formBuilder: FormBuilder,
    private searchResultsComponent: SearchresultsComponent,
  ){
    this.urlForm = this.formBuilder.group({
      urlQuery: ''
    });
  }
    onSubmit(urlData) {
    // Process url info
    //console.warn(urlData);
    urlData.urlQuery = urlData.urlQuery.toLowerCase();
    console.log(urlData);
    this.urlPresent = this.searchResultsComponent.checkUrl(urlData);
    this.urlForm.reset();
    }
  ngOnInit() {
  }

}