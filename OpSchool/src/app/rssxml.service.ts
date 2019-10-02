import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RssxmlService {

  

  constructor(private http: HttpClient) {  }

  public getProducts(): Observable<any> {
    return this._http.get(this.tempPath).map((response: Response) =>
    <any>response.json())
    .do(data => console.log(JSON.stringify(data)))
    .catch(this.handleError);
    }
}
