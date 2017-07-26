import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { BrowserModule } from '@angular/platform-browser'; // NEW 07262017
import { HttpModule } from '@angular/http';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* bl - new pages created by bl */
import { LandingPage } from '../pages/landing/landing';
import { OptionsPage } from '../pages/options/options';
import { DashboardPage } from '../pages/dashboard/dashboard'; // bl
import { MenuPage } from '../pages/menu/menu';
import { FindTeamPage } from '../pages/find-team/find-team';

/* bl - new imports created by bl */
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/* bl - new custom pipes created by bl */
import { MyTeamFilterPipe } from '../pipes/pipe.my-team-filter';
import { FindTeamFilterPipe } from '../pipes/pipe.find-team-filter';
import { FavoriteTeamsFilterPipe } from '../pipes/pipe.favorite-teams-filter';

/* bl - new providers created by bl */
import { GoogleSheetsProvider } from '../providers/google-sheets';
import { GlobalVarsProvider } from '../providers/global-vars';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,

    /* bl - new pages created by bl */
    LandingPage,
    OptionsPage,
    FindTeamPage,
    MenuPage,
    DashboardPage,

    /* bl - new custom pipes created by bl */
    MyTeamFilterPipe,
    FindTeamFilterPipe,
    FavoriteTeamsFilterPipe
    

  ],
  imports: [
    IonicModule.forRoot(MyApp),

    /* bl - new imports created by bl */
    IonicStorageModule.forRoot(),
    BrowserModule, // NEW 07262017
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,

    /* bl - new pages created by bl */
    LandingPage,
    OptionsPage,
    FindTeamPage,
    MenuPage,
    DashboardPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

// -- New providers
// -- Need these here so they are globally accessed by all pages
    GoogleSheetsProvider,
    GlobalVarsProvider,
    InAppBrowser
  ]
})
export class AppModule {}
