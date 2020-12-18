
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './modules/adminM/notFoundC/notfound.component';
import { UnderconstructionComponent } from './modules/commonM/underconstructionC/underconstruction.component';
import { AutherrorComponent } from './modules/authM/authErrorC/autherror.component';
import { LoginComponent } from './modules/authM/loginC/login.component';
import { LogoutComponent } from './modules/authM/logoutC/logout.component';
import { RegisterComponent } from './modules/authM/registerC/register.component';
import { AboutComponent } from './modules/commonM/aboutC/about.component';
import { HomeComponent } from './modules/userM/homeC/home.component';
import { PictureComponent } from './modules/userM/pictureC/picture.component';
import { ShowComponent } from './modules/userM/showC/show.component';
import { GuardIsAdmin } from './guards/authroutesadmin.service';
import { GuardIsLogged } from './guards/authrouteslogged.service';


const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'admin', loadChildren: './modules/adminM/admin.module#AdminModule', canLoad: [GuardIsAdmin, GuardIsLogged]},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'error', component: AutherrorComponent},
  { path: 'show', component: ShowComponent, canActivate: [GuardIsLogged]},
  { path: 'notfound', component: NotfoundComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'underconstruction', component: UnderconstructionComponent, canActivate: [GuardIsLogged]},
  { path: 'picture/:pictureID', component: PictureComponent, canActivate: [GuardIsLogged]},
  { path: '**', component: HomeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




























//===============================================================================================================================
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { AddelemComponent } from './modules/adminM/addElemC/addelem.component';
// import { AddmessageComponent } from './modules/adminM/addMessageC/addmessage.component';
// import { AdminconsoleComponent } from './modules/commonM/adminConsoleC/adminconsole.component';
// import { AlreadyexistComponent } from './modules/adminM/alreadyExistC/alreadyexist.component';
// import { DeletemessageComponent } from './modules/adminM/deleteMessageC/deletemessage.component';
// import { EditComponent } from './modules/adminM/editC/edit.component';
// import { EditmessageComponent } from './modules/adminM/editMessageC/editmessage.component';
// import { FindComponent } from './modules/adminM/findC/find.component';
// import { NotfoundComponent } from './modules/adminM/notFoundC/notfound.component';
// import { UnderconstructionComponent } from './modules/commonM/underconstructionC/underconstruction.component';
// import { UsersComponent } from './modules/adminM/usersC/users.component';
// import { AutherrorComponent } from './modules/authM/authErrorC/autherror.component';
// import { LoginComponent } from './modules/authM/loginC/login.component';
// import { LogoutComponent } from './modules/authM/logoutC/logout.component';
// import { RegisterComponent } from './modules/authM/registerC/register.component';
// import { AboutComponent } from './modules/commonM/aboutC/about.component';
// import { HomeComponent } from './modules/userM/homeC/home.component';
// import { PictureComponent } from './modules/userM/pictureC/picture.component';
// import { ShowComponent } from './modules/userM/showC/show.component';
// import { GuardIsAdmin } from './guards/authroutesadmin.service';
// import { GuardIsLogged } from './guards/authrouteslogged.service';
// import { StatComponent } from './modules/adminM/statC/stat.component';


// const routes: Routes = [
//   { path: "", redirectTo: '/home', pathMatch: 'full'},
//   { path: 'about', component: AboutComponent},
//   { path: 'admin', component: AdminconsoleComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
//   { path: 'home', component: HomeComponent},
//   { path: 'register', component: RegisterComponent},
//   { path: 'login', component: LoginComponent },
//   { path: 'logout', component: LogoutComponent},
//   { path: 'add', component: AddelemComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
//   { path: 'error', component: AutherrorComponent},
//   { path: 'show', component: ShowComponent, canActivate: [GuardIsLogged]},
//   { path: 'find', component: FindComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
//   { path: 'notfound', component: NotfoundComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
//   { path: 'edit', component: EditComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
//   { path: 'editmessage', component: EditmessageComponent, pathMatch: 'full', canActivate: [GuardIsAdmin, GuardIsLogged]},
//   { path: 'deletemessage', component: DeletemessageComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
//   { path: 'addmessage', component: AddmessageComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
//   { path: 'users', component: UsersComponent, canActivate: [GuardIsAdmin]},
//   { path: 'underconstruction', component: UnderconstructionComponent, canActivate: [GuardIsLogged]},
//   { path: 'stats', component: StatComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
//   { path: 'exist', component: AlreadyexistComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
//   { path: 'picture/:pictureID', component: PictureComponent},
//   { path: '**', component: HomeComponent}


  
// ];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
