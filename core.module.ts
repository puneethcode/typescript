import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SideNavBarComponent} from './side-navbar/side-navbar';
import {SigninComponent} from './signin/signin';
import {HeaderComponent} from './header/header';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HeaderComponent, SideNavBarComponent, SigninComponent],
  exports: [HeaderComponent, SideNavBarComponent, SigninComponent]
})

export class CoreModule {
}
