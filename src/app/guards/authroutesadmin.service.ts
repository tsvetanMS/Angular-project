

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StateService } from '../services/stateS/state.service';

@Injectable()
export class GuardIsAdmin implements CanActivate {

  constructor(private stateService: StateService) { }


  canActivate(): boolean {
    return this.stateService.getIsAdmin();
  }
}
