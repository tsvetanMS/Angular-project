import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/stateS/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private stateService: StateService,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.stateService.getIsLoggedIn();
  }

  showTransistors() {
    this.stateService.setShownElements("TRANSISTOR");
    this.router.navigate(['/show']);
  }

  showResistors() {
    this.stateService.setShownElements("RESISTOR");
    this.router.navigate(['/show']);
  }

  showCapacitors() {
    this.stateService.setShownElements("CAPACITOR");
    this.router.navigate(['/show']);
  }

  showDiodes() {
    this.stateService.setShownElements("DIODE");
    this.router.navigate(['/show']);
  }

  showICircuits() {
    this.stateService.setShownElements("ICIRCUIT");
    this.router.navigate(['/show']);
  }

  showTubes() {
    this.stateService.setShownElements("TUBE");
    this.router.navigate(['/show']);
  }

  showQuartzes() {
    this.stateService.setShownElements("QUARTZ");
    this.router.navigate(['/show']);
  }

  showEMechanicals() {
    this.stateService.setShownElements("ELECTROMECHANICAL");
    this.router.navigate(['/show']);
  }
}
