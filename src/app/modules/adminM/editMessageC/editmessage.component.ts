import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmessage',
  templateUrl: './editmessage.component.html',
  styleUrls: ['./editmessage.component.css']
})
export class EditmessageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBackToAdmin() {
    this.router.navigate(['/admin']);
  }
}
