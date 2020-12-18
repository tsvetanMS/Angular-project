import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { StateService } from '../services/stateS/state.service';

@Injectable()
export class GuardIsLogged implements CanActivate, CanLoad {

  constructor(private stateService: StateService) { }

  canActivate(): boolean {
    return this.stateService.getIsLoggedIn();
  }

  canLoad(): boolean {
    return this.stateService.getIsLoggedIn();
  }

}






  

