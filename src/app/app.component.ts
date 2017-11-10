import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    window.localStorage.setItem('selectedTab', '0');
    this.configFirebase();
  }
  configFirebase() {
    let config = {
      apiKey: "AIzaSyActRoM7SJW0h20HTM9GrkwJICC4moOzC8",
      authDomain: "green-vintage.firebaseapp.com",
      databaseURL: "https://green-vintage.firebaseio.com",
      projectId: "green-vintage",
      storageBucket: "green-vintage.appspot.com",
      messagingSenderId: "317596581774"
    };
    firebase.initializeApp(config);
  }
}
