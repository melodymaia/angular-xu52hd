import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UrlsearchComponent } from './urlsearch/urlsearch.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, RouterModule.forRoot([ 
    {path: '', component: UrlsearchComponent },
    {path: 'urlsearchresults', component: SearchresultsComponent},
    ]) ],
  declarations: [ AppComponent, UrlsearchComponent, SearchresultsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
