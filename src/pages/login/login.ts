import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App } from 'ionic-angular';
import { UserModel, AuthenService } from '@ngcommerce/core';
import { RegisterPage } from '../register/register';
import { ThamappAuthenProvider } from '../../providers/thamapp-authen/thamapp-authen';
import { TabsPage } from '../tabs/tabs';

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
    public app: App
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(data) {
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
            // this.oneSignal.getIds().then((data) => {
            //   this.authenService.pushNotificationUser({ id: data.userId });
            // });
          }
          window.localStorage.setItem('selectedTab', '2');
          // setTimeout(function () {
          // this.navCtrl.setRoot(TabsPage);
          this.app.getRootNav().setRoot(TabsPage);
        }, (error) => {
          alert(JSON.parse(error._body).message);
          // this.loadingCtrl.dismiss();
        });
      } else {
        this.register(data);
      }
    }, (err) => {
      alert(JSON.parse(err._body).message);
    });

  }

  register(data) {
    this.navCtrl.push(RegisterPage, data);
  }

}
