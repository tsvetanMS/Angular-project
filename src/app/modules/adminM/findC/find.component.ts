import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IElement } from 'src/app/models/element.model';
import { ElementsService } from 'src/app/services/elementsS/elements.service';
import { StateService } from 'src/app/services/stateS/state.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  findedElement$: Observable<IElement[]>;
  isFound: boolean = false;

  constructor(private elementService: ElementsService, private router: Router, private stateService: StateService) {
    this.findedElement$ = new Observable<IElement[]>();
   }

  ngOnInit(): void {
 
  }


  findElement(name: string) {
    //console.log("От компонента извикваме Element Service.")
   
    this.findedElement$ = this.elementService.loadElementByName(name);

        
    
    this.findedElement$.subscribe(data => {
        //console.log("Вътре сме в абонамента.")
      console.log(data);
      
      
      if(data.length == 0) {
          console.log('Не е намерен елемент.')
          this.isFound = false;
          this.router.navigate(['/notfound']);
      } else {
          console.log("Елемента е намерен");
          this.stateService.setElementNameForEdit(name);
          
          this.router.navigate(['/edit']);
          this.isFound = true;
      }
      
    });
    
   
  }

  ngOnDestroy() {
   //this.findedElement$.subscribe().unsubscribe();
   // така сложена тук работи, след edit прозореца за edit изчезва
   this.stateService.setIsEdited(false);
  }
 

}
