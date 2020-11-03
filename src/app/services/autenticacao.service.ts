import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private loading: any;
  private isGoogleLogin = false;
  private user: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private google: GooglePlus,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth,
    private platform: Platform,
    private router: Router) { }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }

  loginGoogle() {
    let params: any;
    if (this.platform.is('cordova')) {
      if (this.platform.is('android')) {
        params = {
          webClientId: '560619750094-gi9d0gud3ojvhtrsmm1q4e0tpoa4c05f.apps.googleusercontent.com', //  webclientID 'string'
          offline: true
        };
      } else {
        params = {};
      }
      this.showLoading();
      this.google.login(params)
        .then((response) => {
          const { idToken, accessToken } = response;
          this.onLoginSuccess(idToken, accessToken)
        }).catch((error) => {
          console.log(error);
          alert('error:' + JSON.stringify(error));
        });
    } else {
      this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(success => {
        console.log('success in google login', success);
        this.isGoogleLogin = true;
        this.user.next(success.user);
        this.router.navigate(['/suporte']);
      }).catch(err => {
        console.log(err.message, 'Error in google login');
      });
    }
  }

  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
        .credential(accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((success) => {
        this.isGoogleLogin = true;
        this.user.next(success.user);
        this.loading.dismiss();
        this.router.navigate(['/inicial-mapa']);
      });
  }

  onLoginError(err) {
    console.log(err);
  }

  logout() {
    this.fireAuth.signOut().then(() => {
      this.isGoogleLogin = false;
    });
  }

  getUserObservable() {
    return this.user.asObservable();
  }
}
