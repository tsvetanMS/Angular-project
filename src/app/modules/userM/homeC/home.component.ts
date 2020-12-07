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


}
