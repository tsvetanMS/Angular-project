import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authS/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginHandler(email: string, password: string) {
    this.authService.login(email, password);
    
  }

}
