import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FavoritePage } from '../favorite/favorite';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tabnav',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage
  favoriteRoot = FavoritePage
  cartRoot = CartPage
  searchRoot = SearchPage
  profileRoot = ProfilePage

  constructor(public navCtrl: NavController) {

  }
  countBadgeCart() {
    // let user = window.localStorage.getItem('jjuser');
    // let cart = JSON.parse(window.localStorage.getItem('gCart'));
    // let length = 0;
    // if (user) {

    //   if (cart && cart.items) {
    //     let cartLength = cart.items ? cart.items.length : 0;
    //     for (let i = 0; i < cartLength; i++) {
    //       length += cart.items[i].qty;
    //     }
    //   }
    // }
    // return length > 0 ? length.toString() : '';
  }
  getSelectedTab() {
    return window.localStorage.getItem('selectedTab');
  }
}
