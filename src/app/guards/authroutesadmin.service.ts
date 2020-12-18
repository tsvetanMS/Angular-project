

import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { StateService } from '../services/stateS/state.service';

@Injectable()
export class GuardIsAdmin implements CanActivate, CanLoad {

  constructor(private stateService: StateService) { }


  canActivate(): boolean {
    return this.stateService.getIsAdmin();
  }

  canLoad(): boolean {
    return this.stateService.getIsAdmin();
  }
}
