import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RssxmlService {

  private url = 'https://katyushi.github.io/jsons/FormatedData.json';
  private testUrl = 'https://katyushi.github.io/jsons/idk.json';
  private backupUrl = 'https://katyushi.github.io/jsons/Output.json';

  constructor(private http: HttpClient) { }

  public getBackup(){
    return this.http.get(this.backupUrl);
  }

  public getData() {
    return this.http.get(this.url);
  }

  public getTestData() {
    return this.http.get(this.testUrl);
  }

}
