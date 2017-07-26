import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { ListPage } from '../pages/list/list';
import { ChatPage } from '../pages/chat/chat';/////////////
=======
import { ListAlumneComponent } from '../pages/list/list';
>>>>>>> 0fefe7e7f093328818cd7465cc6f1578926191e7

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ListPage,
    ChatPage////////////
=======
    ListAlumneComponent
>>>>>>> 0fefe7e7f093328818cd7465cc6f1578926191e7
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ListPage,
    ChatPage/////////////
=======
    ListAlumneComponent
>>>>>>> 0fefe7e7f093328818cd7465cc6f1578926191e7
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
