import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _errorMessage: string = "Easy, No Errors!";
  private _isLoggedIn: boolean = true;
  private _isAdmin: boolean = true;
  private _loggedInUserEmail: string = "anonimous";
  private _shownElements: string = "default";
  private _elementNameForEdit: string = "default";
  private _isDeleted: boolean = false;
  private _isEdited: boolean = false;

  constructor() { }


  getErrorMessage (): string {
    return this._errorMessage;
  }
  setErrorMessage (message: string) {
    this._errorMessage = message;
  }

  getIsLoggedIn() : boolean {
    return this._isLoggedIn;
   
  }
  setIsLoggedIn(isLoggedIn: boolean) {
    this._isLoggedIn = isLoggedIn;
  }

  getIsAdmin() {
    return this._isAdmin;
  }
  setIsAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }

  getLoggedInUserEmail() : string {
    return this._loggedInUserEmail;
  }
  setLoggedInUserEmail(email: string) {
    this._loggedInUserEmail = email;
  }

  getShownElements() {
    return this._shownElements;
  }
  setShownElements(shownElements: string) {
    this._shownElements = shownElements;
  }
  getElementNameForEdit(){
    return this._elementNameForEdit;
  }
  setElementNameForEdit(name: string){
    this._elementNameForEdit = name;
  }
  getIsDeleted(){
    return this._isDeleted;
  }
  setIsDeleted(isDeleted: boolean){
    this._isDeleted = isDeleted;
  }
  getIsEdited(){
    return this._isEdited;
  }
  setIsEdited(isEdited: boolean){
    this._isEdited = isEdited;
  }

}