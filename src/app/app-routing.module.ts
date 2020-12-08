import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddelemComponent } from './modules/adminM/addElemC/addelem.component';
import { AddmessageComponent } from './modules/adminM/addMessageC/addmessage.component';
import { AdminconsoleComponent } from './modules/adminM/adminConsoleC/adminconsole.component';
import { AlreadyexistComponent } from './modules/adminM/alreadyExistC/alreadyexist.component';
import { DeletemessageComponent } from './modules/adminM/deleteMessageC/deletemessage.component';
import { EditComponent } from './modules/adminM/editC/edit.component';
import { EditmessageComponent } from './modules/adminM/editMessageC/editmessage.component';
import { FindComponent } from './modules/adminM/findC/find.component';
import { NotfoundComponent } from './modules/adminM/notFoundC/notfound.component';
import { UnderconstructionComponent } from './modules/adminM/underconstructionC/underconstruction.component';
import { UsersComponent } from './modules/adminM/usersC/users.component';
import { AutherrorComponent } from './modules/authM/authErrorC/autherror.component';
import { LoginComponent } from './modules/authM/loginC/login.component';
import { LogoutComponent } from './modules/authM/logoutC/logout.component';
import { RegisterComponent } from './modules/authM/registerC/register.component';
import { AboutComponent } from './modules/commonM/aboutC/about.component';
import { HomeComponent } from './modules/userM/homeC/home.component';
import { ShowComponent } from './modules/userM/showC/show.component';


const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'admin', component: AdminconsoleComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'add', component: AddelemComponent},
  { path: 'error', component: AutherrorComponent},
  { path: 'show', component: ShowComponent},
  { path: 'find', component: FindComponent},
  { path: 'notfound', component: NotfoundComponent},
  { path: 'edit', component: EditComponent, pathMatch: 'full'},
  { path: 'editmessage', component: EditmessageComponent, pathMatch: 'full'},
  { path: 'deletemessage', component: DeletemessageComponent},
  { path: 'addmessage', component: AddmessageComponent},
  { path: 'users', component: UsersComponent},
  { path: 'underconstruction', component: UnderconstructionComponent},
  { path: 'exist', component: AlreadyexistComponent},
  { path: '**', component: HomeComponent}


  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
