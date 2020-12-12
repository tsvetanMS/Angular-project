import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authS/auth.service';

@Component({
  selector: 'app-adminconsole',
  templateUrl: './adminconsole.component.html',
  styleUrls: ['./adminconsole.component.css']
})
export class AdminconsoleComponent implements OnInit {

  loggedUserEmail: string = "default";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }



  goToAddElement() {
    this.router.navigate(['/add']);
  }

  goToFindElement() {
    this.router.navigate(['/find']);
  }

  goToManageUsers() {
    this.router.navigate(['/users']);
  }

  goToStatistics() {
    this.router.navigate(['/stats']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  logout() {
    console.log("Извиква се logout() от компонента.")
    this.authService.logout();
  }

 
}
