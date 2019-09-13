import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RssxmlService {

  private tempPath = '../../../resources/XMLParsedToJson.json';

  constructor(private http: HttpClient) {  }

  public getRssFeed() {
    return this.http.get(this.tempPath);
  }
}
