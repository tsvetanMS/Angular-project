import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alreadyexist',
  templateUrl: './alreadyexist.component.html',
  styleUrls: ['./alreadyexist.component.css']
})
export class AlreadyexistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBackToAddElement() {
    this.router.navigate(['/admin/add']);
  }
}
