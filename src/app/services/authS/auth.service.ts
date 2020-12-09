import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from 'src/app/models/user.model';
import { StateService } from '../stateS/state.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rolesDataLength: number = 0;
  rolesData: IUser[] = [];


  constructor(private firebaseAuth: AngularFireAuth,
             private firebaseDB: AngularFirestore,
             private stateService: StateService,
             private router: Router) { }




//------------------------------------------------------------------------------------------------------------------------------------
  registerUser(email: string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(data=> {
            
            this.stateService.setIsLoggedIn(true);
            this.stateService.setLoggedInUserEmail(email); 
            this.stateService.setIsAdmin(false);
            this.saveUser(email, 'user');

            this.router.navigate(['/home']);

    })
    .catch(err => {
              this.stateService.setErrorMessage(err.toString());
              console.log(err.toString());
              this.router.navigate(['/error'])

    })
                     
      }
//-------------------------------------------------------------------------------------------------------------------------------------
 

//-----------------------------------------------------------------------------------------------------------------------------

  login(email: string, password: string) {

    this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(data => {
      console.log(data);
      this.stateService.setIsLoggedIn(true);
      this.stateService.setLoggedInUserEmail(email);
    })
    .catch(err=> {
      console.log(err);
      this.stateService.setErrorMessage(err.toString());
       this.router.navigate(['/error']);
    })

    this.getUserByEmail(email).subscribe(user => {

      console.log("В login service-а сме. Данните за потребителя са: " + user[0].role);

      if('user'.localeCompare(user[0].role) == 0) {
        this.stateService.setIsAdmin(false);
      } else {
        this.stateService.setIsAdmin(true);
      }
      console.log("Потребителя е set-нат на: " + this.stateService.getIsAdmin());

    }).unsubscribe;
    
      console.log("В login service-а сме. Потребителя е: ", this.stateService.getIsAdmin());
 

  }
//-------------------------------------------------------------------------------------------------------------------------
  logout() {
    console.log("В AuthService се извиква signout().")
    this.firebaseAuth.signOut();
    this.stateService.setIsLoggedIn(false);
    this.stateService.setLoggedInUserEmail('anonimous');
    this.stateService.setIsAdmin(false);
    console.log("Излезли сме и се прехвърляме към Home.")
    this.router.navigate(['/logout']);
  }
//------------------------------------------------------------------------------------------------------------------------
  getAllUsers(): Observable<IUser[]> {
      return this.firebaseDB.collection<IUser>('roles').valueChanges();
  }
//-------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------
saveUser(email: string, role: string) {

  this.firebaseDB.collection<IUser>('roles').add({email, role})
  .then(() => {
      console.log('User is saved.');
      
  })
  .catch(error => {
      this.stateService.setErrorMessage(error.toString());
      console.log(error.toString());
       this.router.navigate(['/error']);
  })

}
//----------------------------------------------------------------------------------------------------------------------------

getUserByEmail(email: string): Observable<IUser[]> {
  return this.firebaseDB.collection<IUser>('roles', (ref) => ref.where('email', '==', email))
  .valueChanges();
}
//---------------------------------------------------------------------------------------------------------------------------
promoteUserToAdmin(email: string){
    console.log("В promoteUserToAdmin() сме. Ще заредим user-a заедно с id-to.")
    let userID: string = "";

    this.loadUserByEmailWithId(email).subscribe(user => {
      console.log("Данните за потребителя са получени: ", user);
      userID = user[0].id;

      console.log("ID-то би трябвало да е вече заредено: ID-то е:" + userID);

    }).unsubscribe;


    setTimeout(() => {
      console.log("ID-то би трябвало да е вече заредено: ID-то е:" + userID);

      this.firebaseDB.collection<IUser>('roles').doc(userID).update({ email, role: 'admin' })
      .then(() => {
        console.log("Ролята е променена на admin.")
      })
      .catch(error => {
          this.stateService.setErrorMessage(error.toString());
          console.log(error.toString());
          this.router.navigate(['/error']);
      })
    }, 1000);
    
    
   
 }

//----------------------------------------------------------------------------------------------------------------------------
loadUserByEmailWithId (email: string): Observable<any> {
 
  return this.firebaseDB.collection<IUser>('roles', (ref) => ref.where('email', '==', email))
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
//---------------------------------------------------------------------------------------------------------------------------
}
