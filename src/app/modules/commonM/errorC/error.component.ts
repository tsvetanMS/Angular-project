import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/stateS/state.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

 
  errorMessage: string = "Default Error!";
  isAdmin: boolean = false;

  constructor(private stateService: StateService,
              private router: Router) { }



  ngOnInit(): void {
    this.errorMessage = this.stateService.getErrorMessage(); 
    this.isAdmin = this.stateService.getIsAdmin(); 
  }

  backToHome() {
    this.stateService.setErrorMessage("Easy, No Errors!")
    this.router.navigate(['/home']);
  }

}
