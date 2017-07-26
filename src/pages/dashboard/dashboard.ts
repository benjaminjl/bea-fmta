/*********************************************************************
FILE INFO
**********************************************************************
Name: dashboard.ts
Purpose: Communicates with dashboard.html
Parameters: None
Description: The variables and functions used for the Dashboard Page
Note: The Dashboard Page is one of the potential pages that the user will 
  see when they first open the app.
Last Update: 07/16/17
*********************************************************************/





/*********************************************************************
Name: import
Purpose: Imports different controllers for certain functionalities
Parameters:
Description: 
Note: 
Last Update: 07/16/17
*********************************************************************/

  import { Component } from '@angular/core';  // Exact functionality unknown

  import {    
    
    NavController,    // Controller used to create navCtrl which is used for changing pages/views
    ViewController, // Controller used to create viewCtrl which is used for closing the Menu modal
    App               // Controller used to create app which is used for setting the page/view roots
    
  } from 'ionic-angular';
  
  import { GoogleSheetsProvider } from '../../providers/google-sheets';   // Custom provider that creates googleSheets which is used for calling functions from the GoogleSheetsProvider
  import { GlobalVarsProvider } from '../../providers/global-vars';       // Custom provider that creates GlobalVarsProvider which is use for calling functions from the GlobalVarsProvider provider

  import { InAppBrowser } from '@ionic-native/in-app-browser';  // Controller that creates inAppBrowser which is used to open the Team Links in the user's default browswer

  import { LandingPage } from '../landing/landing'; // Page that goes to the Landing Page when the user clicks on the link within the Menu





/*********************************************************************
Name: @Component
Purpose: Exact functionality unknown
Parameters: selector, templateUrl
Description: This is where the selector and templateUrl are declared.
Note: Ionic provides this by default
Last Update: 07/20/2017
*********************************************************************/

@Component({
  
  selector: 'page-dashboard',   // Exact functionality unknown
  templateUrl: 'dashboard.html' // Refers to the html page that this TypeScript file communicates with
  
})





/*********************************************************************
Name: export class DashboardPage
Purpose: Exact functionality unknown
Parameters:
Description: This is where the constructor, functions, and variables
  are placed for this particular page.
Note: Ionic provides this by default and it is needed for any page
  that is accessed within the app.
Last Update: 07/20/2017
*********************************************************************/

export class DashboardPage {

// -- Dynamic variables

  availableTeams: Array<any>;
  teamLinks: Array<any>;
  teamRecord: Array<any>;
  teamYear: Array<any>;

  spreadsheetId: string;
  apiKey: string;
  sheetName: string;

  activeTeam: any;
  activeTeamName: string;
  activeTeamPrimaryColor: string;
  activeTeamSecondaryColor: string;
  activeTeamComplementColor: string;


/*********************************************************************
Name: constructor
Purpose: Exact functionality unknown
Parameters: navCtrl, modalCtrl, app, googleSheets, globalVars
Description: This is where the controllers and providers are declared
  that are used within this TypeScript file
Note: Nothing ever seems to go into the curly braces of the constructor
  function, except with app.component.ts
Last Update: 07/20/2017
*********************************************************************/

  constructor(
    
    public navCtrl: NavController,              // Used for changing pages
    public googleSheets: GoogleSheetsProvider,  // Used for calling functions from GoogleSheetsProvider
    public globalVars: GlobalVarsProvider,      // Used for calling functions from GlobalVarsProvider
    public viewCtrl: ViewController,            // Used for closing the Menu modal
    public inAppBrowser: InAppBrowser,          // Used for opening the Team Links in the user's default browser
    public app: App                             // Used for setting page/view roots


  ) {}





/*********************************************************************
Name: ionViewDidLoad
Purpose: Executes the code within it after the page is loaded
Parameters: None
Description: When the page loads, the activeTeam variable will be set 
  through a call to the GlobalVarsProvider. The active team is set 
  when the landing.html page is loaded.
Note: None
References: https://ionicframework.com/docs/api/navigation/NavController/
Last Update: 07/20/2017
*********************************************************************/

ionViewDidLoad(){

  this.activeTeam = this.globalVars.getActiveTeam();

  this.activeTeamName = this.activeTeam.teamName;
  this.activeTeamPrimaryColor = this.activeTeam.teamPrimaryColor;
  this.activeTeamSecondaryColor = this.activeTeam.teamSecondaryColor;
  this.activeTeamComplementColor = this.activeTeam.teamComplementColor;

// -- Get Active Team info

  this.spreadsheetId = this.activeTeam.teamSpreadsheetId;
  this.apiKey = this.activeTeam.teamApiKey;


// -- Get the Team Links
    
    this.googleSheets.loadTeams( this.spreadsheetId, 'Links', this.apiKey )
      
      .then( ( data ) => {

        this.teamLinks = data;

      }, (error) => {


// -- If this executes, then an error has occurred

        console.log( error );

      });


// -- Get the Team Record
    
    this.googleSheets.loadTeams( this.spreadsheetId, 'Record', this.apiKey )
      
      .then( ( data ) => {

        this.teamRecord = data;

      }, (error) => {


// -- If this executes, then an error has occurred

        console.log( error );

      });

// -- Get the Team Year
    
    this.googleSheets.loadTeams( this.spreadsheetId, 'Year', this.apiKey )
      
      .then( ( data ) => {

        this.teamYear = data;

      }, (error) => {


// -- If this executes, then an error has occurred

        console.log( error );

      });
}





/*********************************************************************
Name: goToLandingPage
Purpose: Takes the user back to the Landing Page
Parameters: None
Description: When the user presses the home button within the Menu:

  (1) The app controller will set the root nav to the Landing Page

  (2) The viewCtrl will close the Menu modal
  
Note: None
References: None
Last Update: 04/07/2017
*********************************************************************/

  goToLandingPage(){

    this.app.getRootNav().setRoot(LandingPage); // Set the root nav

  }





/*********************************************************************
Name: openTeamLink
Purpose: Open the Team Link that the user selects
Parameters: passed_TeamLink
Description: When the user presses a Team Link within the Menu the
  TeamLink object is passed to this function and then used to open
  the link via the inAppBrowser controller which opens the link
  within the user's default browser.
Note: None
References: https://github.com/driftyco/ionic-conference-app/
Last Update: 04/07/2017
*********************************************************************/

  openTeamLink(passed_Team: any) {

      this.inAppBrowser.create(passed_Team.linkWebsiteLink, '_blank');  // Open the Team Link within the user's default browser

  }

}