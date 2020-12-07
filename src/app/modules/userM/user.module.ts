import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './homeC/home.component';
import { NavComponent } from './navC/nav.component';
import { ShowComponent } from './showC/show.component';



@NgModule({
  declarations: [HomeComponent, NavComponent, ShowComponent],
  exports: [HomeComponent, NavComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
