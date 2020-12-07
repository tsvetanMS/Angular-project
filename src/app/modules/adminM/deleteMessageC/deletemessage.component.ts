import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletemessage',
  templateUrl: './deletemessage.component.html',
  styleUrls: ['./deletemessage.component.css']
})
export class DeletemessageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBackToAdmin() {
    this.router.navigate(['/admin']);
  }
}
