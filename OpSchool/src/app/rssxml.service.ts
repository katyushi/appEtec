import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RssxmlService {

  private url = 'https://katyushi.github.io/FormatedData.json';

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get(this.url);
  }

}
