import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  pictureID: string = "";

  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.pictureID = this.activatedRoute.snapshot.params['pictureID'];
  }

  backToCollection(){
    this.route.navigate(['/show']);
  }
}
