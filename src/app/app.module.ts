import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirebaseModule } from './modules/firebaseM/myfirebase.module';
import { MyCommonModule } from './modules/commonM/common.module';
import { UserModule } from './modules/userM/user.module';
import { AuthModule } from './modules/authM/auth.module';
import { AdminModule } from './modules/adminM/admin.module';
import { GuardIsAdmin } from './guards/authroutesadmin.service';
import { GuardIsLogged } from './guards/authrouteslogged.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyfirebaseModule,
    MyCommonModule,
    UserModule,
    AuthModule,
    // За да направя Lazy Loading на admin модула вече не го импортвам тук
    //AdminModule
  ],
  providers: [GuardIsAdmin, GuardIsLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
