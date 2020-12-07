import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IElement } from 'src/app/models/element.model';
import { ElementsService } from 'src/app/services/elementsS/elements.service';
import { StateService } from 'src/app/services/stateS/state.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  elementCategory: string = "default";

  elements$: Observable<IElement[]>;

  constructor(private elementService: ElementsService, private stateService: StateService) {

        this.elements$ = new Observable<IElement[]>();              
  }

  

  ngOnInit(): void {
    this.elementCategory = this.stateService.getShownElements()+'S'+'   COLLECTION';
    this.elements$ = this.elementService.loadElementsByType(this.stateService.getShownElements());
  }

}