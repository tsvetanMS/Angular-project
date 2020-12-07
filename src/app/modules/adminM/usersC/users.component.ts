import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/authS/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<IUser[]>;

  constructor(private authService: AuthService) {

    this.users$ = new Observable<IUser[]>();              
}

  ngOnInit(): void {

    this.users$ = this.authService.getAllUsers();
  }

}
