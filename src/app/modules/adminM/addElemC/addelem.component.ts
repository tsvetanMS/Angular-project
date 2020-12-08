import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementsService } from 'src/app/services/elementsS/elements.service';
import { StateService } from 'src/app/services/stateS/state.service';

@Component({
  selector: 'app-addelem',
  templateUrl: './addelem.component.html',
  styleUrls: ['./addelem.component.css']
})
export class AddelemComponent implements OnInit {

  typesArr: string [];

  constructor(private elementsService: ElementsService, private router: Router, private stateService: StateService) { 
    this.typesArr = new Array("TRANSISTOR", "RESISTOR", "CAPACITOR", "DIODE", "ICIRCUIT", "TUBE", "QUARTZ", "ELECTROMECHANICAL" );
  }

  ngOnInit(): void {
  }

 

  addElementHandler(pictureID: string, type: string, name: string, parameters: string, producer: string, description: string) {
   
    this.elementsService.checkExistenceOfElementByName(name);
        

    // Така както съм направил state-та в момента, за да работи, въвеждам това забавяне тук.
    // Иначе кода се изпълнява преди да приключи асинхронната заявка за проверка на наличието на 
    // елемента в базата и винаги добавя елемент, дори да има вече такъв (с такова име).
    // Това работи.
    // С предване на състоянието със Subject пробвах на няколко пъти, не се получава и на няколко 
    // пъти зацикли програмата с хиляди заявки към Firebase.
    
    setTimeout(() => {
      
      if(this.stateService.getIsElementExist()) {
        this.router.navigate(['/exist']);
      } else {
        this.elementsService.saveElement(pictureID, type, name, parameters, producer, description);
      }

    }, 1000);

  }


    
}
