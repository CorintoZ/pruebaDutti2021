import { Injectable } from "@angular/core";
import firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { first } from "rxjs/operators";

@Injectable()
export class AuthService {
  public user: firebase.User;
  constructor(public fAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      return await this.fAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
    }
  }

  async register(email: string, password: string) {
    try {
      return await this.fAuth.createUserWithEmailAndPassword(email, password);
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
