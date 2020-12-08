import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminconsole',
  templateUrl: './adminconsole.component.html',
  styleUrls: ['./adminconsole.component.css']
})
export class AdminconsoleComponent implements OnInit {

  loggedUserEmail: string = "default";

  constructor(private router: Router) { }

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
    this.router.navigate(['/underconstruction']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  logout() {

  }

 
}
