import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirebaseModule } from './modules/firebaseM/myfirebase.module';
import { MyCommonModule } from './modules/commonM/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyfirebaseModule,
    MyCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
