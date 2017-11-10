import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App } from 'ionic-angular';
import { CheckoutModel, PaymentModel, ListAddressModel, CartService, AddressService, PaymentService, OrderService } from "@ngcommerce/core";
import { FormAddressPage } from './../form-address/form-address';
import { CompletePage } from './../complete/complete';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  address = {} as ListAddressModel;
  payment = {} as PaymentModel;
  shipping = {} as CheckoutModel;
  datashipping: any = {};
  datapayment: any = {
    payment: {}
  };
  dataconfirm: any = {};
  steps: Array<any> = [
    {
      value: 1,
      title: "SHIPPING"
    },
    {
      value: 2,
      title: "PAYMENT"
    },
    {
      value: 3,
      title: "CONFIRM"
    }
  ];
  currentstep: number = 1;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public cartService: CartService,
    public addressService: AddressService,
    public paymentService: PaymentService,
    public orderService: OrderService,
    public loadingCtrl: LoadingProvider,
    public app: App
  ) {
    this.getShippingData();
    this.getAddressData();
    this.getPayment();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }
  getShippingData() {
    setTimeout(() => {
      this.shipping = this.cartService.getCartStorage();
    }, 1000);
  }
  getAddressData() {
    this.loadingCtrl.onLoading();
    this.addressService.getAddressByUser().then((data) => {
      // console.log(data);
      this.address = data;
      this.loadingCtrl.dismiss();
    }, (error) => {
      this.loadingCtrl.dismiss();
      console.error(error);
    });
  }
  getPayment() {
    // this.loadingCtrl.onLoading();
    this.paymentService.getPaymentList().then((data) => {
      this.payment = data[0];
      console.log(this.payment);
      // this.loadingCtrl.dismiss();
    }, (err) => {
      // this.loadingCtrl.dismiss();
      console.error(err);
    });
  }
  completedShippingStep(e) {
    this.datashipping = e;
    // alert('completedShippingStep');
    this.currentstep = 2;
    console.log(this.datashipping);
  }
  completedPaymentStep(e) {
    this.datapayment = e;
    // console.log(e);
    // alert('completedPaymentStep');
    console.log(this.datapayment);
    this.currentstep = 3;
  }
  completedConfirmStep(e) {
    this.dataconfirm = e;
    console.log(this.dataconfirm);
    this.createOrder();
  }
  createOrder() {
    this.loadingCtrl.onLoading();
    this.orderService.createOrder(this.dataconfirm).then((data) => {
      // this.navCtrl.push(CompletePage);
      window.localStorage.setItem('order', JSON.stringify(data));
      this.loadingCtrl.dismiss();
      this.app.getRootNav().setRoot(CompletePage); // set full page
    }, (error) => {
      console.error(error);
      this.loadingCtrl.dismiss();
    });
  }
  openFormAddress(e) {
    let modal = this.modalCtrl.create(FormAddressPage);
    modal.onDidDismiss(data => {
      this.loadingCtrl.onLoading();
      this.addressService.createAddress(data).then(resp => {
        this.loadingCtrl.dismiss();
        this.getAddressData();
      }, err => {
        this.loadingCtrl.dismiss();
      })
      console.log(data);
    });
    modal.present();
  }

}
