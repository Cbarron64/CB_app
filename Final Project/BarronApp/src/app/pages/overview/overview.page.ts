/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { StartGroupModalPage } from '../start-group-modal/start-group-modal.page';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  chats = [];

  constructor(private authService: AuthService,private browser: InAppBrowser, private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet, private chatService: ChatService) { }

  ngOnInit() {
    this.loadChats();
  }
//***THIS IS THE CORDOVA PLUGIN***
openPage(){
  this.browser.create('https://glife.grantham.edu/','_self');
}
//***THIS IS THE CORDOVA PLUGIN***

loadChats(){
  this.chatService.getUserChats().subscribe(res => {
    console.log('my chats: ', res);
    this.chats = res;
  });
}

async startGroup(){
  const modal = await this.modalCtrl.create({
    component: StartGroupModalPage,
    swipeToClose: true,
    presentingElement: this.routerOutlet.nativeEl
  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  if (data) {
    if (data.action == 'single') {
      await this.chatService.startChat(data.user);
    }else if (data.action == 'group') {
      await this.chatService.startGroup(data.name, data.users);
    }
  }
}
  logout(){
    this.authService.logout();
  }

}
