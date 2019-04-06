import { Component, OnInit } from '@angular/core';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';


@Component({
  selector: 'app-jornal',
  templateUrl: './jornal.page.html',
  styleUrls: ['./jornal.page.scss'],
})
export class JornalPage implements OnInit {

  constructor(private browserTab: BrowserTab) {

  browserTab.isAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        browserTab.openUrl('https://ionic.io');
      } else {
        // open URL with InAppBrowser instead or SafariViewController
      }
    });
  }

  ngOnInit() {
  }

}
