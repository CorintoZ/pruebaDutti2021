import { Injectable } from "@angular/core";
import firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { first } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class AuthService {
  public user: firebase.User;
  constructor(public fAuth: AngularFireAuth, private fstore: AngularFirestore) {}

  async login(email: string, password: string) {
    try {
      return await this.fAuth.signInWithEmailAndPassword(email + "@starwarsship.com", password);
    } catch (err) {
      console.error(err);
    }
  }

  async register(email: string, password: string, username: string, firstname: string, lastname: string) {
    try {
      return await this.fAuth
        .createUserWithEmailAndPassword(username + "@starwarsship.com", password)
        .then((userCreated) => {
          const userId = userCreated.user.uid;

          this.fstore.collection("users").doc(userId).set({ firstname, lastname, username, email });
        });
    } catch (err) {
      console.error(err);
    }
  }

  async logout() {
    try {
      await this.fAuth.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  getCurrentUser() {
    return this.fAuth.authState.pipe(first()).toPromise();
  }
}
