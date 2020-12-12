import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './homeC/home.component';
import { ShowComponent } from './showC/show.component';
import { MyCommonModule } from '../commonM/common.module';
import { PictureComponent } from './pictureC/picture.component';

@NgModule({
  declarations: [HomeComponent, ShowComponent, PictureComponent],
  exports: [HomeComponent, ShowComponent],
  imports: [
    CommonModule,
    MyCommonModule
    
  ]
})
export class UserModule { }
