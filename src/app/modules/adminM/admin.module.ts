import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddelemComponent } from './addElemC/addelem.component';
import { FormsModule } from '@angular/forms';
import { AddmessageComponent } from './addMessageC/addmessage.component';
import { AdminconsoleComponent } from './adminConsoleC/adminconsole.component';
import { EditComponent } from './editC/edit.component';
import { DeletemessageComponent } from './deleteMessageC/deletemessage.component';
import { EditmessageComponent } from './editMessageC/editmessage.component';
import { FindComponent } from './findC/find.component';
import { NotfoundComponent } from './notFoundC/notfound.component';
import { UsersComponent } from './usersC/users.component';
import { MyCommonModule } from '../commonM/common.module';



@NgModule({
  declarations: [AddelemComponent, AddmessageComponent, AdminconsoleComponent, EditComponent, DeletemessageComponent,
                 EditmessageComponent, FindComponent, NotfoundComponent, UsersComponent],
  exports: [AddelemComponent, AddmessageComponent, AdminconsoleComponent, EditComponent, DeletemessageComponent,
            EditmessageComponent, FindComponent, NotfoundComponent, UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    MyCommonModule
  ]
})
export class AdminModule { }
