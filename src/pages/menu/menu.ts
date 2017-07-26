/*********************************************************************
FILE INFO
**********************************************************************
Name: menu.ts
Purpose: Communicates with menu.html
Parameters: None
Description: The variables and functions used for the Menu Page
Note: The Menu Page is opened by the user when they are viewing a
  team. It inlcludes Favorites, Team Links, and a link to the Landing
  Page.
Last Update: 04/07/2017
*********************************************************************/





/*********************************************************************
Name: import
Purpose: Imports different controllers for certain functionalities
Parameters:
Description: 
Note: 
Last Update: 04/07/2017
*********************************************************************/

  import { Component } from '@angular/core';  // Exact functionality unknown

  import { 
    
    NavController,  // Controller used to create navCtrl which is used for changing pages/views
    NavParams,      // Exact functionality unknown
    ViewController, // Controller used to create viewCtrl which is used for closing the Menu modal
    App             // Controller used to create app which is used for setting the page/view roots

  } from 'ionic-angular';

  import { GoogleSheetsProvider } from '../../providers/google-sheets';  // Custom provider that creates googleSheets which is used for calling functions from the GoogleSheetsProvider
  import { GlobalVarsProvider } from '../../providers/global-vars';      // Custom provider that creates GlobalVarsProvider which is use for calling functions from the GlobalVarsProvider provider
  
  import { InAppBrowser } from '@ionic-native/in-app-browser';  // Controller that creates inAppBrowser which is used to open the Team Links in the user's default browswer

  import { LandingPage } from '../landing/landing'; // Page that goes to the Landing Page when the user clicks on the link within the Menu
  import { TabsPage } from '../tabs/tabs';          // Page that lays over the others pages that are accessed via the tabs shown within the app
  




/*********************************************************************
Name: @Component
Purpose: Exact functionality unknown
Parameters: selector, templateUrl
Description: This is where the selector and templateUrl are declared.
Note: Ionic provides this by default
Last Update: 04/07/2017
*********************************************************************/

@Component({

  selector: 'page-menu',
  templateUrl: 'menu.html'

})





/*********************************************************************
Name: export class LandingPage
Purpose: Exact functionality unknown
Parameters:
Description: This is where the constructor, functions, and variables
  are placed for this particular page.
Note: Ionic provides this by default and it is needed for any page
  that is accessed within the app.
Last Update: 04/07/2017
*********************************************************************/
//
export class MenuPage {

// -- Dynamic Variables

  availableTeams: Array<any> = [];  // The array of available teams set through a call to the GlobalVarsProvider
  teamLinks: Array<any>;            // The array of Team Links set through a call to GlobalVarsProvider





/*********************************************************************
Name: constructor
Purpose: Exact functionality unknown
Parameters: navCtrl, navParams, googleSheets, storage, globalVars,
  modalCtrl, alertCtrl
Description: This is where the controllers and providers are declared
  that are used within this TypeScript file
Note: Nothing ever seems to go into the curly braces of the constructor
  function, except with app.component.ts
Last Update: 04/07/2017
*********************************************************************/

  constructor(
    
    public navCtrl: NavController,              // Used for changing pages
    public navParams: NavParams,                // Exact functionality unknown
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
Description: When the page loads

  (1) The availableTeams array will be set through a call to the
  GlobalVarsProvider. Available teams are set within the
  GoogleSheetsProvider which is called upon with the
  app.component.ts file.

  (2) The teamLinks array will be set through the GlobalVarsProvider.
  Team links are set within the GlobalVarsProvider which is called upon
  within the dashboard.ts file.

Note: None
References: https://ionicframework.com/docs/api/navigation/NavController/
Last Update: 04/07/2017
*********************************************************************/

ionViewDidLoad(){

  this.availableTeams = this.globalVars.getAvailableTeams();  // Set the availableTeams variable

  //this.teamLinks = this.globalVars.getTeamLinks();          // REMOVED 07262017 - Set the teamLinks variable

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

openTeamLink(passed_TeamLink: any) {

    this.inAppBrowser.create(passed_TeamLink.linkWebsite, '_blank');  // Open the Team Link within the user's default browser

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

  this.viewCtrl.dismiss();                    // Close the Menu modal

}





/*********************************************************************
Name: closeMenu
Purpose: Closes the Menu modal
Parameters: None
Description: When the user presses the close button within the Menu 
  the viewCtrl will close the Menu modal
Note: None
References: None
Last Update: 04/07/2017
*********************************************************************/

closeMenu() {

  this.viewCtrl.dismiss();  // Close Menu modal

}





/*********************************************************************
Name: goToTeam
Purpose: Opens the team selected from the list of Favorites within the Menu
Parameters: passed_Team
Description: When the user selects a team from their list of Favorites
  within the Menu:

  (1) That team is set as the active team via the GlobalVarsProvider

  (2) The root navigation is set to the TabsPage via the App controller

  (3) The Menu is closed via the viewCtrl

Note: None
References: None
Last Update: 04/07/2017
*********************************************************************/

goToTeam(passed_Team: any){

    this.globalVars.setActiveTeam(passed_Team); // Set active team

    this.app.getRootNav().setRoot(TabsPage);    // Set root nav to TabsPage

    this.viewCtrl.dismiss();                    // Close the Menu modal

  }

}
