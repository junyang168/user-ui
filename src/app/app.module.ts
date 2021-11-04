import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { SortDirective } from './directive/sort.directive';
import { NgxSpinnerModule } from "ngx-spinner";  

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SortDirective
  ],

  imports: [
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
