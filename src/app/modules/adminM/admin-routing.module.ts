import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddelemComponent } from './addElemC/addelem.component';
import { AddmessageComponent } from './addMessageC/addmessage.component';
import { AlreadyexistComponent } from './alreadyExistC/alreadyexist.component';
import { DeletemessageComponent } from './deleteMessageC/deletemessage.component';
import { EditComponent } from './editC/edit.component';
import { EditmessageComponent } from './editMessageC/editmessage.component';
import { FindComponent } from './findC/find.component';
import { NotfoundComponent } from './notFoundC/notfound.component';
import { UsersComponent } from './usersC/users.component';
import { StatComponent } from './statC/stat.component';
import { GuardIsAdmin } from 'src/app/guards/authroutesadmin.service';
import { GuardIsLogged } from 'src/app/guards/authrouteslogged.service';
import { AdminconsoleComponent } from '../commonM/adminConsoleC/adminconsole.component';


const routes: Routes = [
  { path: "", component: AdminconsoleComponent, pathMatch: 'full', canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'add', component: AddelemComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'find', component: FindComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'notfound', component: NotfoundComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'edit', component: EditComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'editmessage', component: EditmessageComponent, pathMatch: 'full', canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'deletemessage', component: DeletemessageComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'addmessage', component: AddmessageComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'users', component: UsersComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'stats', component: StatComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: 'exist', component: AlreadyexistComponent, canActivate: [GuardIsAdmin, GuardIsLogged]},
  { path: '**', component: AdminconsoleComponent, canActivate: [GuardIsAdmin, GuardIsLogged]}


  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
