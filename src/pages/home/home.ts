import { Component } from '@angular/core';
import { IonicPage, App, NavController, NavParams } from 'ionic-angular';
import { HomeService, HomeCategoryModel, ProductItemModel } from "@ngcommerce/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeData = {} as HomeCategoryModel;
  lastVisit = [] as Array<ProductItemModel>;
  popularProduct = [] as Array<ProductItemModel>;
  pages: string;
  constructor(
    public app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public homeService: HomeService
  ) {
    this.getHomeData();
    this.getLastVisit();
  }
  getHomeData() {
    this.pages = '0';
    // this.loadingCtrl.onLoading();
    this.homeService.getHome().then((data) => {
      this.homeData = data;
      console.log(this.homeData.categories);
      // this.loadingCtrl.dismiss();
    }, (error) => {
      console.log(error);
      // this.loadingCtrl.dismiss();
    });

  }

  getLastVisit() {
    this.lastVisit = this.homeService.getLastVisit();
  }
 
}
