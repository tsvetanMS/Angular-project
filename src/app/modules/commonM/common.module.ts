import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './aboutC/about.component';
import { ErrorComponent } from './errorC/error.component';
import { FooterComponent } from './footerC/footer.component';
import { UnderconstructionComponent } from './underconstructionC/underconstruction.component';



@NgModule({
  declarations: [AboutComponent, ErrorComponent, FooterComponent, UnderconstructionComponent],
  exports: [AboutComponent, ErrorComponent, FooterComponent, UnderconstructionComponent],
  imports: [
    CommonModule
  ]
  
})
export class MyCommonModule { }
