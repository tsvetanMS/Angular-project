import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './loginC/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logoutC/logout.component';
import { RegisterComponent } from './registerC/register.component';
import { AutherrorComponent } from './authErrorC/autherror.component';



@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegisterComponent, AutherrorComponent],
  exports: [LoginComponent, LogoutComponent, RegisterComponent, AutherrorComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
