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
       
    this.findedElement$ = this.elementService.loadElementByName(name);
     
    
    this.findedElement$.subscribe(data => {
       
      console.log(data);

      if(data.length == 0) {
          this.router.navigate(['/admin/notfound']);
      } else {
          
          this.stateService.setElementNameForEdit(name);
          this.router.navigate(['/admin/edit']);
      }


    }, error=> {
      this.stateService.setErrorMessage(error.toString());
      this.router.navigate(['error']);
    }).unsubscribe;
  }

  ngOnDestroy() {
   this.stateService.setIsEdited(false);
  }
 

}
