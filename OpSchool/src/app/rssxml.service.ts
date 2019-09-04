import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RssxmlService {

  constructor(private http: HttpClient) {  }

  public getRssFeed(){
    return this.http.get('https://etecnewsibitinga.wixsite.com/etecnewsibitinga/blog-feed.xml');
  }
}
