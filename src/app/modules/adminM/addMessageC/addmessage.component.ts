import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.css']
})
export class AddmessageComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBackToAdmin() {
    this.router.navigate(['/admin']);
  }
}
