import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsProvider {

  constructor() {}

// -- Available Teams

  _availableTeams: Array<any>;

  setAvailableTeams(passed_AvailableTeams: Array<any>){
    this._availableTeams = passed_AvailableTeams;
  }

  getAvailableTeams(){
    return this._availableTeams;
  }


// -- Active Team

  _activeTeam: any;

  setActiveTeam(passed_Team: any){
    this._activeTeam = passed_Team;
  }

  getActiveTeam(){
    return this._activeTeam;
  }


// -- Team Links

  _teamLinks: Array<any>;

  setTeamLinks(passed_TeamLinks){
    this._teamLinks = passed_TeamLinks;
  }

  getTeamLinks(){
    return this._teamLinks;
  }

// -- My Team

  _myTeamIsSet: boolean;

  setMyTeamIsSet(passed_Boolean: boolean){
    this._myTeamIsSet = passed_Boolean;
  }

  getMyTeamIsSet(){
    return this._myTeamIsSet;
  }

}