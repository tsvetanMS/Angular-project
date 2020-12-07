import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './aboutC/about.component';
import { ErrorComponent } from './errorC/error.component';
import { FooterComponent } from './footerC/footer.component';
import { NavComponent } from './navC/nav.component';



@NgModule({
  declarations: [AboutComponent, ErrorComponent, FooterComponent, NavComponent],
  exports: [AboutComponent, ErrorComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule
  ]
  
})
export class MyCommonModule { }
