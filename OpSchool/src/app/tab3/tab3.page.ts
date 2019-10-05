import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  data: any;

constructor() {  }

ngOnInit() {
  fetch('./assets/data/datajson.json').then(res => res.json())
  .then(json => {
    this.data = json;
  });
}

}
