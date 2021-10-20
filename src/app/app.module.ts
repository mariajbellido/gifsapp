import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, SharedModule ],
  declarations: [ AppComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
