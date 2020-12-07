import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/stateS/state.service';

@Component({
  selector: 'app-autherror',
  templateUrl: './autherror.component.html',
  styleUrls: ['./autherror.component.css']
})
export class AutherrorComponent implements OnInit {

  
  errorMessage: string = "Default Error!"

  constructor(private stateService: StateService,
              private router: Router) { }



  ngOnInit(): void {
    this.errorMessage = this.stateService.getErrorMessage();  
  }

  backToHome() {
    this.stateService.setErrorMessage("Easy, No Errors!")
    this.router.navigate(['/home']);
  }

}



