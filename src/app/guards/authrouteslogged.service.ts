import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StateService } from '../services/stateS/state.service';

@Injectable()
export class GuardIsLogged implements CanActivate {

  constructor(private stateService: StateService) { }

  canActivate(): boolean {
    return this.stateService.getIsLoggedIn();
  }

}






  

