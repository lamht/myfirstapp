import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()
export class AF {
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  constructor(public db: AngularFireDatabase, public af: AngularFireAuth) {
    this.messages = this.db.list('messages');
  }
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  /*
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }
  */
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  /*
  login(user: string, pass: string) {
    return this.af.auth.login({
        email: user,
        password: pass,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }
    */
/*
  createUser(user: string, pass: string){
    return this.af.auth.createUser({email: user, password: pass}, {method: AuthMethods.CustomToken});
  }
  */
  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.signOut();
  }
  /**
   * Saves a message to the Firebase Realtime Database
   * @param text
   */
  sendMessage(text) {
    var message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.messages.push(message);
  }
  deleteMessage(id: string){
    if(id === null || id === ''){
      return;
    }
    this.messages.remove(id);
  }
}
