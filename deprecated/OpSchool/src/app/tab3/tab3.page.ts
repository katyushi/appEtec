import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RssxmlService } from './../rssxml.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public data101: any;
  public datos: any;
  public testData: any;

constructor(private rssxmlService: RssxmlService) {  }

ngOnInit() {
  /*this.rssxmlService.getData().subscribe(dados => {
    console.log(dados);
    // this.data101 = dados['data'];
    this.data101 = dados;
    console.log('this is data101' , this.data101);
    this.datos = Array.of(this.data101);
    console.log('this is datos' , this.datos);
  });
  this.rssxmlService.getTestData().subscribe(data => {
    console.log(data);
    this.testData = data;
    console.log('this is testData' , this.testData);
  });*/
}

}
