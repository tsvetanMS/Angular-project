import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authS/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler(email: string, password: string) {
    this.authService.login(email, password);
    setTimeout(()=> {
      this.router.navigate(['/home']);
    }, 1000);
    
  }

}
