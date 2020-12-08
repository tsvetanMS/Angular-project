import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IElementID } from 'src/app/models/element-plus-id.model';
import { ElementsService } from 'src/app/services/elementsS/elements.service';
import { StateService } from 'src/app/services/stateS/state.service';

//------------------------------------------------------------------------------------------------------------------------------
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  element: IElementID;
  elementID: string = "";
  typesArr: string[];

//-------------------------------------------------------------------------------------------------------------------------------
  constructor(private elementService: ElementsService, private stateService: StateService, private router: Router) {
    this.typesArr = new Array("TRANSISTOR", "RESISTOR", "CAPACITOR", "DIODE", "ICIRCUIT", "TUBE", "QUARTS", "ELECTROMECHANICAL");
    this.element = {
      id: "default",
      pictureID: "default",
      type: "default",
      name: "default",
      parameters: "default",
      producer: "default",
      description: "default"
    };
  }
//---------------------------------------------------------------------------------------------------------------------------------
  ngOnInit() {

    let name: string = this.stateService.getElementNameForEdit();

    if (!this.stateService.getIsEdited()) {

      this.elementService.loadElementByNameWithId(name).subscribe(data => {
        if (data[0]) {
          this.elementID = data[0].id;
          this.element = data[0];
        }
      }).unsubscribe;

    } else {
      this.router.navigate(['/editmessage']);
    }
  }
//--------------------------------------------------------------------------------------------------------------------------------
  editElementHandler() {
    this.elementService.updateElement(this.elementID, this.element.pictureID, this.element.type, this.element.name,
      this.element.parameters, this.element.producer, this.element.description);

    this.router.navigate(['/editmessage']);

  }
//--------------------------------------------------------------------------------------------------------------------------------
  deleteElement() {
    this.elementService.deleteElement(this.elementID);
    this.router.navigate(['/deletemessage']);
  }
//--------------------------------------------------------------------------------------------------------------------------------
  ngOnDestroy() {
    this.stateService.setElementNameForEdit("default");
    this.stateService.setIsEdited(true);
  }
//--------------------------------------------------------------------------------------------------------------------------------  
}
