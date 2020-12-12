import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IElement } from '../../models/element.model';
import { IElementID } from '../../models/element-plus-id.model'
import { map, take } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { StateService } from '../stateS/state.service';
import { IStat } from 'src/app/models/stat.model';

// import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class ElementsService {

 
   _elementsArr: IElementID[] = [];

   /* Ще пазим данните в ElementService-а. Ще ги подаваме към компонента със Subject */
   elementsSubject = new Subject<IElementID[]>();
  
   constructor (
       private fireDB: AngularFirestore,
       private router: Router,
       private stateService: StateService
   ){
   }

//------------------------------------------------------------------------------------------------------------------------------------------

   goToThirdComponent() {
           this.router.navigate(['/third']);
       }
//----------------------------------------------------------------------------------------------------------------------------------------
   getData (): IElementID[] {
       return [...this._elementsArr];
   }    
//----------------------------------------------------------------------------------------------------------------------------------------
   /* valueChanges() взема само стойностите, без да взема id-тата*/
fetchElements () {

   this.fireDB.collection<IElement>('elements')
       .valueChanges()
       .subscribe((data) => {
           return data;
       })

}
//---------------------------------------------------------------------------------------------------------------------------------------
fetchElementByTypeWithId (type: string) {};

//----------------------------------------------------------------------------------------------------------------------------------
deleteElement(id: string) {
   
   this.fireDB.collection<IElement>('elements').doc(id).delete()
   .then(() => {
       console.log('Element is deleted!');
       this.stateService.setIsDeleted(true);
       this.stateService.setElementNameForEdit("default");
       this.router.navigate(['/deletemessage']);
       
   })
   .catch(error => {
       this.stateService.setErrorMessage(error.toString());
       console.log(error.toString());
       this.router.navigate(['/error']);
   });
}

//---------------------------------------------------------------------------------------------------------------------------------

updateElement (id: string, pictureID: string, type: string, name: string, parameters: string, producer: string, description: string) {
   this.fireDB.collection<IElement>('elements').doc(id).update({pictureID, type, name, parameters, producer, description })
   .then(() => {
       console.log('Element is updated.');
       this.stateService.setElementNameForEdit("default");
       this.stateService.setIsEdited(true);

       //this.router.navigate(['/editmessage']);
       

   })
   .catch(error => {
       this.stateService.setErrorMessage(error.toString());
       console.log(error.toString());
       this.router.navigate(['/error']);
   })
   /*
   .finally(()=> {
    console.log("Излизаме от updateElement услугата и се връщаме в edit компонента.");   
    });
  */
  
}
//---------------------------------------------------------------------------------------------------------------------------------
loadElementByNameWithId (name: string): Observable<any> {
   console.log("Вътре сме в service метода loadEelemntByNameWithId");
   return this.fireDB.collection<IElement>('elements', (ref) => ref.where('name', '==', name))
       .snapshotChanges()
       .pipe(take(1),
           map(docArray => {
               return docArray.map(e => {
                   return {
                       id: e.payload.doc.id,
                       ...e.payload.doc.data()
                   }
               })
           })
       );
}

//------------------------------------------------------------------------------------------------------------------------------------------
loadElementByName (name: string): Observable<IElement[]> {
   return this.fireDB.collection<IElement>('elements', (ref) => ref.where('name', '==', name))
   .valueChanges().pipe(take(1));
}

//------------------------------------------------------------------------------------------------------------------------------------------

loadElementsByType (type: string): Observable<IElement[]> {
   
   return this.fireDB.collection<IElement>('elements', (ref) => ref.where('type', '==', type))
       .valueChanges();
       
}   
//-------------------------------------------------------------------------------------------------------------------------------------------

saveElement(pictureID: string, type: string, name: string, parameters: string, producer: string, description: string) {

   this.fireDB.collection<IElement>('elements').add({pictureID, type, name, parameters, producer, description })
   .then(() => {
       this.router.navigate(['/addmessage']);
   })
   .catch(error => {
       this.stateService.setErrorMessage(error.toString());
       this.router.navigate(['/error']);
   })

}
//------------------------------------------------------------------------------------------------------------------------------------------
  
checkExistenceOfElementByName(name: string) {
    
    this.loadElementByName(name)
    .subscribe(data => {
       
        if(data.length == 0) {
           this.stateService.setIsElementExist(false);
        } else {
           this.stateService.setIsElementExist(true);
        }
        
    }).unsubscribe;
    
       
}
//--------------------------------------------------------------------------------------------------------------------------------

getAllStats(): Observable<IStat[]> {
    return this.fireDB.collection<IStat>('stats').valueChanges();
}
//--------------------------------------------------------------------------------------------------------------------------------

saveStatistics() {
    console.log("Извикали сме метода saveStatistcis()");
    let shownElement: string = "";
    shownElement = this.stateService.getShownElements();
    let id = shownElement.toLowerCase();
    let visits: number;
    this.getElementStatistics(shownElement);

    setTimeout(()=> {

    
    visits = this.stateService.getNumebrOfVisits();
    visits = visits + 1;

    console.log("Показаните елементи са от категория: " + shownElement);
    console.log("Посещенията ще бъдат - брой: " + visits);

    this.fireDB.collection<IStat>('stats').doc(id).update({ element: shownElement, visits: visits })
    .then(() => {
        console.log('Статистиката за елемента е записана.');
        
    })
    .catch(error => {
        this.stateService.setErrorMessage(error.toString());
        console.log(error.toString());
        this.router.navigate(['/error']);
    })
    }, 1000);
    

}
//----------------------------------------------------------------------------------------------------------------------------------
getElementStatistics(shownElement: string) {

    this.fireDB.collection<IStat>('stats', (ref) => ref.where('element', '==', shownElement))
   .valueChanges().pipe(take(1)).subscribe(data => {
       let numberOfVisits = data[0].visits;

        console.log('Информацията за посещенията е тук - посещения:  ', numberOfVisits);
        this.stateService.setNumberOfVisits(numberOfVisits);
           
   });

}
//------------------------------------------------------------------------------------------------------------------------------------
}
