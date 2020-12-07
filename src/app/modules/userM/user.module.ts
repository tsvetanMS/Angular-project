import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './homeC/home.component';
import { ShowComponent } from './showC/show.component';
import { MyCommonModule } from '../commonM/common.module';



@NgModule({
  declarations: [HomeComponent, ShowComponent],
  exports: [HomeComponent, ShowComponent],
  imports: [
    CommonModule,
    MyCommonModule
  ]
})
export class UserModule { }
