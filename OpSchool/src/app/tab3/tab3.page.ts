import { Component } from '@angular/core';
import { RssxmlService } from '../rssxml.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public titleArt: any;
  public descriptionArt: any;
  public tagsArt: any;
  public linksArt: any;
  public illuminati: any;
constructor(private feed: RssxmlService) {  }

  /**
   * getdesc
   */
  /*public getdesc() {
    this.descriptionArt = this.feed.getRssFeed().subscribe(data => {
      console.log('bethesda');
      const daata = (data as any);
      const yay = JSON.parse(daata._body);
      console.log(data as any);
      console.log(yay);
      this.titleArt = yay.title;
      this.descriptionArt = yay.description;
      this.linksArt = yay.link;
      this.tagsArt = yay.category;
      //  this.illuminati = yay.dc:creator;
    });
  }*/

  /*function readJSON(path) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) { 
      if (this.status == 200) {
          let file = new File([this.response], 'temp');
          SVGAnimatedLength fileReader = new FileReader();
          fileReader.addEventListener('load', function(){
               //do stuff with fileReader.result
          });
          fileReader.readAsText(file);
      } 
    }
    xhr.send();
}

readJSON('../../../resources/XMLParsedToJson.json');*/

}
