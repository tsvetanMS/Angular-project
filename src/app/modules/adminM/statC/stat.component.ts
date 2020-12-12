import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStat } from 'src/app/models/stat.model';
import { ElementsService } from 'src/app/services/elementsS/elements.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  visits$: Observable<IStat[]>;

  constructor(private elementsService: ElementsService) {
    this.visits$ = new Observable<IStat[]>();   
   }

  ngOnInit(): void {
    this.visits$ = this.elementsService.getAllStats();
  }

}
