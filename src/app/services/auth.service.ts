import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public platform: Platform
  ) { }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        err => reject(err)
      )
    });
  }
 
  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        err => reject(err)
      )
    });
  }
 
  doLogout() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signOut()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
    });
  }
}
