import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementsService } from 'src/app/services/elementsS/elements.service';

@Component({
  selector: 'app-addelem',
  templateUrl: './addelem.component.html',
  styleUrls: ['./addelem.component.css']
})
export class AddelemComponent implements OnInit {

  typesArr: string [];

  constructor(private elementService: ElementsService, private router: Router) { 
    this.typesArr = new Array("TRANSISTOR", "RESISTOR", "CAPACITOR", "DIODE", "ICIRCUIT", "TUBE", "QUARTS", "ELECTROMECHANICAL" );
  }

  ngOnInit(): void {
  }

  addElementHandler(pictureID: string, type: string, name: string, parameters: string, producer: string, description: string) {
      this.elementService.saveElement(pictureID, type, name, parameters, producer, description);
     this.router.navigate(['/addmessage']);
  }

}
