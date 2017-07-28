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
import { HelpPage } from '../pages/help/help';
import { DashboardPage } from '../pages/dashboard/dashboard'; // bl
import { MenuPage } from '../pages/menu/menu';
import { FindTeamPage } from '../pages/find-team/find-team';
import { SearchRosterPage } from '../pages/search-roster/search-roster';
import { SearchSchedulePage } from '../pages/search-schedule/search-schedule';

/* bl - new imports created by bl */
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/* bl - new custom pipes created by bl */
import { MyTeamFilterPipe } from '../pipes/pipe.my-team-filter';
import { FindTeamFilterPipe } from '../pipes/pipe.find-team-filter';
import { FavoriteTeamsFilterPipe } from '../pipes/pipe.favorite-teams-filter';
import { RecordFilterPipe } from '../pipes/pipe.record-filter';
import { HelpFilterPipe } from '../pipes/pipe.help-filter';
import { SearchRosterFilterPipe } from '../pipes/pipe.search-roster-filter';
import { SearchScheduleFilterPipe } from '../pipes/pipe.search-schedule-filter';

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
    HelpPage,
    FindTeamPage,
    MenuPage,
    DashboardPage,
    SearchRosterPage,
    SearchSchedulePage,

    /* bl - new custom pipes created by bl */
    MyTeamFilterPipe,
    FindTeamFilterPipe,
    FavoriteTeamsFilterPipe,
    RecordFilterPipe,
    HelpFilterPipe,
    SearchRosterFilterPipe,
    SearchScheduleFilterPipe
    

  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement: 'bottom'}), // Placing tabs at bottom by default

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
    HelpPage,
    FindTeamPage,
    MenuPage,
    DashboardPage,
    SearchRosterPage,
    SearchSchedulePage

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
