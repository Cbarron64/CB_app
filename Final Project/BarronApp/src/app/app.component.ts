import { Component } from '@angular/core';
//***THIS IS THE CORDOVA PLUGIN***
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
//***THIS IS THE CORDOVA PLUGIN***

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private browser: InAppBrowser) {}
}


