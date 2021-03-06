import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddelemComponent } from './addElemC/addelem.component';
import { FormsModule } from '@angular/forms';
import { AddmessageComponent } from './addMessageC/addmessage.component';
import { EditComponent } from './editC/edit.component';
import { DeletemessageComponent } from './deleteMessageC/deletemessage.component';
import { EditmessageComponent } from './editMessageC/editmessage.component';
import { FindComponent } from './findC/find.component';
import { NotfoundComponent } from './notFoundC/notfound.component';
import { UsersComponent } from './usersC/users.component';
import { MyCommonModule } from '../commonM/common.module';
import { AlreadyexistComponent } from './alreadyExistC/alreadyexist.component';
import { StatComponent } from './statC/stat.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [AddelemComponent, AddmessageComponent, EditComponent, DeletemessageComponent,
                 EditmessageComponent, FindComponent, NotfoundComponent, UsersComponent,
                 AlreadyexistComponent,
                 StatComponent],
  exports: [AddelemComponent, AddmessageComponent, EditComponent, DeletemessageComponent,
            EditmessageComponent, FindComponent, NotfoundComponent, UsersComponent,
            AlreadyexistComponent],
  imports: [
    CommonModule,
    FormsModule,
    MyCommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
