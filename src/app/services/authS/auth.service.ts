import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from 'src/app/models/user.model';
import { StateService } from '../stateS/state.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rolesDateLength: number = 0;
  rolesDate: IUser[] = [];


  constructor(private firebaseAuth: AngularFireAuth,
             private firebaseDB: AngularFirestore,
             private stateService: StateService,
             private router: Router) { }




//------------------------------------------------------------------------------------------------------------------------------------
  registerUser(email: string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(data=> {
            
            this.stateService.setIsLoggedIn(true);
            this.stateService.setLoggedInUserEmail(email); 
            // this.router.navigate(['/home']);

    })
    .catch(err => {
              this.stateService.setErrorMessage(err.toString());
              console.log(err.toString());
             // this.router.navigate(['/error'])

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
      // this.router.navigate(['/home']);
    })
    .catch(err=> {
      console.log(err);
      this.stateService.setErrorMessage(err.toString());
      // this.router.navigate(['/error']);
    })
  }
//-------------------------------------------------------------------------------------------------------------------------
  logout() {
    console.log("В AuthService се извиква signout().")
    this.firebaseAuth.signOut();
    this.stateService.setIsLoggedIn(false);
    this.stateService.setLoggedInUserEmail('anonimous');
    console.log("Излезли сме и се прехвърляме към Home.")
   // this.router.navigate(['/logout']);
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
      // this.router.navigate(['/error']);
  })

}
//----------------------------------------------------------------------------------------------------------------------------

}
