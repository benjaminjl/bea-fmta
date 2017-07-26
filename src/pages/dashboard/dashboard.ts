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
    ModalController,  // Controller used to create the modalCtrl which is used for showing the menus
    App               // Controller used to create app which is used for setting the page/view roots
    
  } from 'ionic-angular';
  
  import { GoogleSheetsProvider } from '../../providers/google-sheets';   // Custom provider that creates googleSheets which is used for calling functions from the GoogleSheetsProvider
  import { GlobalVarsProvider } from '../../providers/global-vars';       // Custom provider that creates GlobalVarsProvider which is use for calling functions from the GlobalVarsProvider provider

  import { MenuPage } from '../menu/menu'   // Page that is shown via the modalCtrl that acts as a menu with options





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

  spreadsheetId: string;
  apiKey: string;
  sheetName: string;

  activeTeam: string;


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
    public modalCtrl: ModalController,          // Used for opening pages that act as menus
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

  this.activeTeam = this.globalVars.getActiveTeam().teamName;

// -- Get Active Team info

  this.spreadsheetId = this.globalVars.getActiveTeam().teamSpreadsheetId;
  this.apiKey = this.globalVars.getActiveTeam().teamApiKey;


// -- Get the Team Links for the MenuPage

  this.sheetName = 'Links';
    
    this.googleSheets.loadTeams( this.spreadsheetId, this.sheetName, this.apiKey )
      
      .then( ( data ) => {

        this.teamLinks = data;

        this.globalVars.setTeamLinks(this.teamLinks);

      }, (error) => {


// -- If this executes, then an error has occurred

        console.log( error );

      });
}






/*********************************************************************
Name: openMenuPage
Purpose: Opens the Menu Page
Parameters: None
Description: This function will open the Menu page for the user.
Note: This is a modal page that displays over the other pages.
References: https://github.com/driftyco/ionic-conference-app/blob/master/src/pages/schedule/schedule.ts
Last Update: 07/20/2017
*********************************************************************/

  openMenuPage(){

  let profileModal = this.modalCtrl.create(MenuPage);
   
    profileModal.present();
   
  }

}
