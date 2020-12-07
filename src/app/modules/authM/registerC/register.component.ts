import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authS/auth.service';
import { StateService } from 'src/app/services/stateS/state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  passwordError : boolean = true;
  errorMessage: string = "No errors";

  constructor(private authService: AuthService,
              private stateService: StateService) { }

  ngOnInit(): void {
    console.log("Стартиране на Register Component")
  }

 
//---------------------------------------------------------------------------------------------------------------------------------
  registerHandler(email: string, password: string, rePassword: string) {
      
      this.authService.registerUser(email, password);
           
      this.authService.saveUser(email, 'user');

  }
//---------------------------------------------------------------------------------------------------------------------------------  

}



/* За да спре да му подчертава, че нещо не е наред Идакиев написа над реда, който беше проблемен :
    // tslint:disable-next-line:no-used-expression 
*/

