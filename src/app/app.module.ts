import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FavoritePage } from '../pages/favorite/favorite';
import { CartPage } from '../pages/cart/cart';
import { SearchPage } from '../pages/search/search';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { ListScollXComponent } from '../components/list-scoll-x/list-scoll-x';
import { PreloadImage } from '../components/preload-image/preload-image';

import { Ionic2RatingModule } from 'ionic2-rating';

import { EcommerceCoreModule, IonIconSearchbarComponent, IonListGridComponent, IonFormProfileComponent, IonListCartComponent, IonListProductComponent, IonDetailProductComponent, IonFormReviewComponent, IonFormWizardComponent, IonFormWizardStepComponent, IonFormShippingComponent, IonFormPaymentComponent, IonFormConfirmComponent, IonFormPaymentOptionComponent, IonFormCreditComponent, IonFormDeliveryComponent, IonFormCounterserviceComponent, IonListShopComponent, IonDetailShopComponent, IonBackgroundImageComponent, OmiseService } from "@ngcommerce/core";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { ListshopPage } from '../pages/listshop/listshop';
import { ListproductPage } from '../pages/listproduct/listproduct';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ShopDetailPage } from '../pages/shop-detail/shop-detail';
import { WritereviewPage } from '../pages/writereview/writereview';
import { LoadingProvider } from '../providers/loading/loading';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FavoritePage,
    CartPage,
    SearchPage,
    ProfilePage,
    TabsPage,
    ListshopPage,
    ListproductPage,
    ProductDetailPage,
    ShopDetailPage,
    WritereviewPage,

    ListScollXComponent,
    IonBackgroundImageComponent,
    IonIconSearchbarComponent,
    // IonListGridComponent,
    PreloadImage,
    IonListShopComponent,
    IonListProductComponent,
    IonDetailShopComponent,
    IonDetailProductComponent,
    IonFormReviewComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp),
    EcommerceCoreModule.forRoot('https://thamturakit.herokuapp.com/api/')
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FavoritePage,
    CartPage,
    SearchPage,
    ProfilePage,
    TabsPage,
    ListshopPage,
    ListproductPage,
    ProductDetailPage,
    ShopDetailPage,
    WritereviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadingProvider
  ]
})
export class AppModule {}
