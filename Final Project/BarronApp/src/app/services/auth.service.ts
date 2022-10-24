import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged} from '@angular/fire/auth';
import { signInWithEmailAndPassword, signOut, UserCredential } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { take, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private currentUserData = null;

  constructor(private auth: Auth, private firestore: Firestore, private router: Router) {
    onAuthStateChanged(this.auth, user => {
      if (user){
        const userDoc = doc(this.firestore, `users/${user.uid}`);
        docData(userDoc, { idField: 'id' }).pipe(
          take(1)
        ).subscribe(data => {
          console.log('userdata: ', data);
          this.currentUserData = data;
        });
      }else {
        this.currentUserData = null;
      }
      });
   }

   login({email, password}) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

   async signup({email, password}): Promise<UserCredential> {
    try{
      const credentials = await createUserWithEmailAndPassword(this.auth, email, password);
      const userDoc = doc(this.firestore, `users/${credentials.user.uid}`);
      await setDoc(userDoc, { email, chats: [] });
      return credentials;
    }catch(err){
    throw(err);
    }
  }

  async logout(){
    await signOut(this.auth);
    this.router.navigateByUrl('/', {replaceUrl: true});
  }

  getUserId(){
    return this.auth.currentUser.uid;
  }

  getUserEmail(){
    return this.currentUserData.email;
  }
}
