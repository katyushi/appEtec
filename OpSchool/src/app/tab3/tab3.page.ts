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

constructor(private rssxmlService: RssxmlService) {  }

ngOnInit() {
  this.rssxmlService.getData().subscribe(dados => {
    console.log(dados);
    this.data101 = dados['data'];
  });
}

}
