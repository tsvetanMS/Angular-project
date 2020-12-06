import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IElement } from '../../models/element.model';
import { IElementID } from '../../models/element-plus-id.model'
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { StateService } from '../stateS/state.service';


@Injectable({
  providedIn: 'root'
})
export class ElementsService {

 /* тази променлива беше private, но за експеримент за прехвърляне на данни
        към компонент я направих public. Понеже със Subject-а има проблем 
        при изобразяването да данните в html-а веднъж, като се покажат не 
        искат да изчезнат после. Също така не искат да се покажат ако
        тага на компонента, който ги визуализира не е сложен в app.component.html
    */    
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

/* Искам да направя такава заявка, която да взема от базата само транзистори примерно. Това е филтриране по тип. */
   /* Това работи. Генерира id-то автоматично. Ако искаме ние да зададем id-to използваме .doc('id').set({...}) 
       Тогава ако документ с това id съществува се презаписва с подадения. Това ще го ползвам при edit на нещо*/
/* Това работи. Връща от базата само елементите от определения тип. */
/* valueChanges() връща само данните без id-то. Трябва да вземаме и Id-to, когато искам да edit-вам елемент */
/* използва се snapshotChanges() и като резултат след цялата преработка се връща масив */
/* За да конвертираме данните от един вид към друг ни трябва оператора map от rxjs библиотеката */

/*
fetchElementByTypeWithId (type: string) {
   this.angFireDB.collection<IElement>('elements', (ref) => ref.where('type', '==', type))
       .snapshotChanges()
       .pipe(
           map(docArray => {
               return docArray.map(e => {
                   return {
                       id: e.payload.doc.id,
                       ...e.payload.doc.data()
                   }
               })
           })
       )
       .subscribe((data) => {
           this._elementsArr = data;
           // Масива се деструкторира и това което ще върне subject-а би трябвало да е нов масив, а не 
           // референция към подадения. Целта е данните да са immutable, т.е да неможе да се променят
           // Обаче този Subject така написан предаде само първия елемент от масива 
           this.elementsSubject.next([...this._elementsArr]);
           console.log("Данните са получени");
           console.log(data);
           console.log("Създава Subject и пренасочва към третия компонент")
           this.router.navigate(['/third']);
       });
}  
*/
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
   }).finally();
}

//---------------------------------------------------------------------------------------------------------------------------------
updateElement (id: string, pictureID: string, type: string, name: string, parameters: string, producer: string, description: string) {
   this.fireDB.collection<IElement>('elements').doc(id).update({pictureID, type, name, parameters, producer, description })
   .then(() => {
       console.log('Element is updated.');
       this.stateService.setElementNameForEdit("default");
       this.stateService.setIsEdited(true);
       this.router.navigate(['/editmessage']);
       

   })
   .catch(error => {
       this.stateService.setErrorMessage(error.toString());
       console.log(error.toString());
       this.router.navigate(['/error']);
   }).finally();

  
}
//---------------------------------------------------------------------------------------------------------------------------------
loadElementByNameWithId (name: string): Observable<any> {
   console.log("Вътре сме в service метода loadEelemntByNameWithId");
   return this.fireDB.collection<IElement>('elements', (ref) => ref.where('name', '==', name))
       .snapshotChanges()
       .pipe(
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
   .valueChanges();
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
       console.log('Element is saved.');
       this.router.navigate(['/addmessage']);
   })
   .catch(error => {
       this.stateService.setErrorMessage(error.toString());
       console.log(error.toString());
       this.router.navigate(['/error']);
   })

}
//------------------------------------------------------------------------------------------------------------------------------------------
  

}
