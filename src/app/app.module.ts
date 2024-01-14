import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddManagerComponent } from './MyComponents/add-manager/add-manager.component';
import { AddVisitorComponent } from './MyComponents/add-visitor/add-visitor.component';
import { MainTableComponent } from './MyComponents/managers-table/main-table.component';
import { HttpClientModule } from '@angular/common/http';
import { VisitorTableComponent } from './MyComponents/visitors-table/visitor-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddManagerComponent,
    AddVisitorComponent,
    MainTableComponent,
    VisitorTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
