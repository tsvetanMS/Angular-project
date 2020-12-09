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
import { UnderconstructionComponent } from './underconstructionC/underconstruction.component';
import { AlreadyexistComponent } from './alreadyExistC/alreadyexist.component';



@NgModule({
  declarations: [AddelemComponent, AddmessageComponent, EditComponent, DeletemessageComponent,
                 EditmessageComponent, FindComponent, NotfoundComponent, UsersComponent, UnderconstructionComponent,
                 AlreadyexistComponent],
  exports: [AddelemComponent, AddmessageComponent, EditComponent, DeletemessageComponent,
            EditmessageComponent, FindComponent, NotfoundComponent, UsersComponent, UnderconstructionComponent,
            AlreadyexistComponent],
  imports: [
    CommonModule,
    FormsModule,
    MyCommonModule
  ]
})
export class AdminModule { }
