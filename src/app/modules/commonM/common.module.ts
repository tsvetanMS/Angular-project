import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './aboutC/about.component';
import { ErrorComponent } from './errorC/error.component';
import { FooterComponent } from './footerC/footer.component';
import { NavComponent } from './navC/nav.component';
import { AdminconsoleComponent } from './adminConsoleC/adminconsole.component';
import { UnderconstructionComponent } from './underconstructionC/underconstruction.component';



@NgModule({
  declarations: [AboutComponent, ErrorComponent, FooterComponent, NavComponent, AdminconsoleComponent, UnderconstructionComponent],
  exports: [AboutComponent, ErrorComponent, FooterComponent, NavComponent, AdminconsoleComponent, UnderconstructionComponent],
  imports: [
    CommonModule
  ]
  
})
export class MyCommonModule { }
