/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonContent } from '@ionic/angular';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chatId = null;
  currentUserId = null;
  users = null;
  chatInfo = null;
  msg = '';
  messages = [];

  @ViewChild(IonContent) content: IonContent;

  scrollPercentage = 0;

  constructor(private route: ActivatedRoute, private authService: AuthService,
    private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.chatId = this.route.snapshot.paramMap.get('chatid');
    this.currentUserId = this.authService.getUserId();

    console.log('My Chat: ', this.chatId);
    this.chatService.getChatInfo(this.chatId).pipe(
      // eslint-disable-next-line arrow-body-style
      switchMap(info => {
        this.users = {};
        this.chatInfo = info;

        // eslint-disable-next-line prefer-const
        for (let user of info.users){
          this.users[user.id] = user.email;
        }
        console.log('INFO: ', this.users);
        return this.chatService.getChatMessages(this.chatId);
      }),
      // eslint-disable-next-line arrow-body-style
      map(messages =>{
        return messages.map(msg =>{
          msg.fromUser = this.users[msg.from] || 'Deleted Chat';
          return msg;
        });
      })
    ).subscribe(res => {
      console.log('FIN: ', res);
      // eslint-disable-next-line prefer-const
      for (let m of res){
        if (this.messages.filter(msg => msg.id == m.id).length == 0){
          this.messages.push(m);
        }
      };
      setTimeout(() => {
        this.content.scrollToBottom(400);
    }, 400);
  });
  }

  sendMessage(){
    this.chatService.addMessage(this.chatId, this.msg).then(_ => {
      this.msg = '';
      this.content.scrollToBottom(300);
    });
  }

  async contentScrolled(ev){
    const scrollElement = await this.content.getScrollElement();
    const scrollPosition = ev.detail.scrollTop;
    const totalContentHeight = scrollElement.scrollHeight;
    this.scrollPercentage = scrollPosition / (totalContentHeight - ev.target.clientHeight) + 0.001;
  }

  scrollDown(){
    this.content.scrollToBottom(300);
  }
//****use of a Capasitor Plugin HERE****
  async selectImage(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      source: CameraSource.Photos,
      resultType: CameraResultType.Base64
    });
    if (image){
      console.log('image: ', image);
      this.chatService.addFileMsg(image.base64String, this.chatId);
    }
  }
  leaveChat(){
    this.chatService.leaveChat(this.chatId).then(_ => {
     this.router.navigateByUrl('/inside');
    });
  }
}
