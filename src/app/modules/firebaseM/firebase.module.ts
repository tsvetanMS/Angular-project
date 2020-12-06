import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/firebase.app.module';
// Това е друг начин по който може да се импортне същото.
// При експериментите работеше с долния импорт.
// import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
],
exports: [
    AngularFireAuthModule,
    AngularFirestoreModule
]
  
})
export class FirebaseModule { }
