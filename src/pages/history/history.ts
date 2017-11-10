import { HistoryDetailPage } from './../history-detail/history-detail';
import { LoadingProvider } from './../../providers/loading/loading';
import { OrderProvider } from './../../providers/order/order';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App } from 'ionic-angular';
import { OrderModel } from './history.model';
// import { OrderModel } from '@ngcommerce/core';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  user: any;
  order: Array<OrderModel>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public orderService: OrderProvider,
    public loadingCtrl: LoadingProvider,
    public app: App
  ) {
    this.user = JSON.parse(window.localStorage.getItem('thamappbuyer'));
  }

  ionViewWillEnter() {
    if (this.user) {
      this.getHistory();
    }
  }
  getHistory() {
    this.loadingCtrl.onLoading();
    this.orderService.getOrderList().then((data) => {
      this.order = data;
      this.loadingCtrl.dismiss();
      console.log(data);
    }, (err) => {
      this.loadingCtrl.dismiss();
      console.log(err);
    });

  }
  detailHistory(item) {
    this.navCtrl.push(HistoryDetailPage, item);
  }

}
