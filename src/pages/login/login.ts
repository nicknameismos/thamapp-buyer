import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App } from 'ionic-angular';
import { UserModel, AuthenService } from '@ngcommerce/core';
import { RegisterPage } from '../register/register';
import { ThamappAuthenProvider } from '../../providers/thamapp-authen/thamapp-authen';
import { TabsPage } from '../tabs/tabs';
import { LoadingProvider } from '../../providers/loading/loading';
import { OneSignal } from '@ionic-native/onesignal';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  tel: string = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authenService: AuthenService,
    public platform: Platform,
    public thamappAuthenService: ThamappAuthenProvider,
    public app: App,
    public loadingCtrl: LoadingProvider,
    public oneSignal: OneSignal,
    public fb: Facebook
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(data) {
    this.loadingCtrl.onLoading();
    this.thamappAuthenService.checkUserByTel(data).then((res) => {
      if (res) {
        let user = {
          username: data,
          password: 'Usr#Pass1234'
        }
        // this.loadingCtrl.onLoading();
        this.authenService.signIn(user).then((data) => {
          window.localStorage.setItem('thamappbuyer', JSON.stringify(data));
          if (this.platform.is('cordova')) {
            this.oneSignal.getIds().then((data) => {
              this.authenService.pushNotificationUser({ id: data.userId });
            });
          }
          window.localStorage.setItem('selectedTab', '2');
          // setTimeout(function () {
          // this.navCtrl.setRoot(TabsPage);
          this.loadingCtrl.dismiss();
          this.app.getRootNav().setRoot(TabsPage);
        }, (error) => {
          this.loadingCtrl.dismiss();
          alert(JSON.parse(error._body).message);
          // this.loadingCtrl.dismiss();
        });
      } else {
        this.loadingCtrl.dismiss();
        this.register(data);
      }
    }, (err) => {
      this.loadingCtrl.dismiss();
      alert(JSON.parse(err._body).message);
    });

  }

  register(data) {
    this.navCtrl.push(RegisterPage, data);
  }

  loginFb() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        this.fb.api('me?fields=id,last_name,first_name,picture,email', null).then((user: FacebookLoginResponse) => {
          // alert(JSON.stringify(user));
          let data = JSON.parse(JSON.stringify(user));
          this.loginWithFacebook(data);
        })
          .catch(e => {
            alert(JSON.stringify(e));
          })
      }
      )
      .catch(e => console.log('Error logging into Facebook', e));


    this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  loginWithFacebook(data) {
    let user = {
      username: data.email,
      password: 'Usr#Pass1234'
    }
    // this.loadingCtrl.onLoading();
    this.authenService.signIn(user).then((data) => {
      window.localStorage.setItem('thamappbuyer', JSON.stringify(data));
      if (this.platform.is('cordova')) {
        this.oneSignal.getIds().then((data) => {
          this.authenService.pushNotificationUser({ id: data.userId });
        });
      }
      window.localStorage.setItem('selectedTab', '2');
      // setTimeout(function () {
      // this.navCtrl.setRoot(TabsPage);
      this.loadingCtrl.dismiss();
      this.app.getRootNav().setRoot(TabsPage);
    }, (error) => {
      this.loadingCtrl.dismiss();
      this.navCtrl.push(RegisterPage, { facebook: data });
    });
  }
}
