import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { regiterModel } from './register.model';
import { ThamappAuthenProvider } from '../../providers/thamapp-authen/thamapp-authen';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: regiterModel = new regiterModel();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public thamappAuthenService: ThamappAuthenProvider,
    public app: App
  ) {
    // alert(this.navParams.data);
    this.user.tel = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  saveAddress() {
    this.thamappAuthenService.regisAndAddress(this.user).then((data) => {
      window.localStorage.setItem('selectedTab', '2');
      this.app.getRootNav().setRoot(TabsPage);
    }, (err) => {
      alert(JSON.parse(err._body).message);
    });
  }

}