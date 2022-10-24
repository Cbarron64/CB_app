/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable eqeqeq */
/* eslint-disable arrow-body-style */
/* / eslint-disable-next-line @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { addDoc, arrayRemove, arrayUnion, collection, } from '@angular/fire/firestore';
import { collectionData, doc, docData, orderBy, serverTimestamp } from '@angular/fire/firestore';
import { documentId, Firestore, query, updateDoc, where } from '@angular/fire/firestore';
import { getDownloadURL, Storage } from '@angular/fire/storage';
import { ref, uploadString } from '@firebase/storage';
import { map, switchMap, take, takeUntil } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private firestore: Firestore, private auth: AuthService, private storage: Storage ) { }

  getAllUsers() {
    const userId = this.auth.getUserId();
    const usersRef = collection(this.firestore, 'users');
      return collectionData(usersRef, { idField: 'id' }).pipe(
       take(1),
   map(users => {
    return users.filter(user => user.id != userId);
    })
   );
  }

  startChat(user) {
    const userId = this.auth.getUserId();
    const userEmail = this.auth.getUserEmail();
    const chatUsers = [
      { id: userId, email: userEmail },
      { id: user.id, email: user.email }
    ];

    return this.addChat(chatUsers, user.email);
  }

  startGroup(name, users: []) {
    const userId = this.auth.getUserId();
    const userEmail = this.auth.getUserEmail();
    const cleanedUsers = users.map((usr: any) => {
      return {
        id: usr.id,
        email: usr.email
      };
    });
    const chatUsers = [
      { id: userId, email: userEmail },
      ...cleanedUsers
    ];

    return this.addChat(chatUsers, name);
  };

  private addChat(chatUsers, name) {
    const chatsRef = collection(this.firestore, 'chats');
    const chat = {
      users: chatUsers,
      name,
    };

    return addDoc(chatsRef, chat).then(res => {
      const groupId = res.id;
      const promises = [];

      // eslint-disable-next-line prefer-const
      for (let user of chatUsers) {
        const userChatsRef = doc(this.firestore, `users/${user.id}`);
        const update = updateDoc(userChatsRef, {
          chats: arrayUnion(groupId)
        });
        promises.push(update);
      }

      return Promise.all(promises);
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getUserChats(){
    const userID = this.auth.getUserId();
    const userRef = doc(this.firestore,  `users/${userID}`);
    return docData(userRef).pipe(
      switchMap(data => {
        console.log('user data: ', data);

        const userChats = data.chats;
        const chatsRef = collection(this.firestore, 'chats');
        const q = query(chatsRef, where(documentId(), 'in', userChats));
        return collectionData(q, { idField: 'id'});
      }
      )
    );
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getChatInfo(chatId){
    const chat = doc(this.firestore, `chats/${chatId}`);
    return docData(chat);
  }

    // eslint-disable-next-line @typescript-eslint/member-ordering
  getChatMessages(chatId){
    const messages = collection(this.firestore, `chats/${chatId}/messages`);
    const q = query(messages, orderBy('createdAt'));
    return collectionData(q, { idField: 'id'});
  }

// eslint-disable-next-line @typescript-eslint/member-ordering
  addMessage(chatId, msg){
    const userId = this.auth.getUserId();
    const messages = collection(this.firestore, `chats/${chatId}/messages`);
    return addDoc(messages, {
      from: userId,
      msg,
      createdAt: serverTimestamp()
    });
  }

  async addFileMsg(base64, chatId){
    const userId = this.auth.getUserId();
    let newName = `${new Date ().getTime()}-${userId}.jpeg`;

    const storageRef = ref(this.storage, newName);
    const uploadResult = await uploadString(storageRef, base64, 'base64', {
      contentType: 'image/jpeg'
    });
    console.log('Upload result: ', uploadResult);

    const url = await getDownloadURL(uploadResult.ref);

    const messages = collection(this.firestore, `chats/${chatId}/messages`);
    return addDoc(messages, {
      from: userId,
      file: url,
      createdAt: serverTimestamp()
    });
  }
  leaveChat(chatId){
    const userId = this.auth.getUserId();
    const userEmail = this.auth.getUserEmail();
    const chatRef = doc(this.firestore, `chats/${chatId}`);
    return updateDoc(chatRef, {
      users: arrayRemove({id: userId, email: userEmail})
    }).then(res => {
    console.log('Removed: ', res);
    const userRef = doc(this.firestore, `users/${userId}`);
    return updateDoc(userRef, {
      chats: arrayRemove(chatId)
    });
    });
  }
}
