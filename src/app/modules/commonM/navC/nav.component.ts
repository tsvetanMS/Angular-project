import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authS/auth.service';
import { StateService } from 'src/app/services/stateS/state.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  loggedInUserEmail: string = "anonimous";

  constructor(private router: Router,
              private stateService: StateService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.stateService.getIsAdmin();
    this.isLoggedIn = this.stateService.getIsLoggedIn();
    this.loggedInUserEmail = this.stateService.getLoggedInUserEmail();
  }

  goToAdminConsole() {
    this.router.navigate(['/admin']);
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  goToRegister() {
    console.log("Пренасочва към Register Component-а.")
    this.router.navigate(['/register']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  logoutHandler() {
    console.log("Извиква се logout() от компонента.")
    this.authService.logout();
  }

  goToAboutPage() {
    this.router.navigate(['/about']);
  }

}

