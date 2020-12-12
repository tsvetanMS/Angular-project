import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private elementService: ElementsService, private stateService: StateService, private router: Router) {

        this.elements$ = new Observable<IElement[]>();              
  }

  

  ngOnInit(): void {
    let shownElement: string = this.stateService.getShownElements();
    
    if(shownElement.localeCompare('QUARTZ') == 0){
      this.elementCategory = this.stateService.getShownElements()+'ES'+'   COLLECTION';
    } else {
      this.elementCategory = this.stateService.getShownElements()+'S'+'   COLLECTION';
    }
  
    this.elements$ = this.elementService.loadElementsByType(this.stateService.getShownElements());

    console.log("Следва извикване на метода saveStatistics().");
    this.elementService.saveStatistics();
  }

  largePicture(pictureID: string){
    this.router.navigate(['/picture', pictureID]);
  }

  goToUnderConstruction() {
    this.router.navigate(['/underconstruction']);
  }


  
}
