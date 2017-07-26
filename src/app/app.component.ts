import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { ListPage } from '../pages/list/list';
import { ChatPage } from '../pages/chat/chat';////////////
=======
import { ListAlumneComponent } from '../pages/list/list';
>>>>>>> 0fefe7e7f093328818cd7465cc6f1578926191e7

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
<<<<<<< HEAD
      { title: 'List', component: ListPage },
      { title: 'Chat', component: ChatPage }////////////
=======
      { title: 'List', component: ListAlumneComponent }
>>>>>>> 0fefe7e7f093328818cd7465cc6f1578926191e7
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
