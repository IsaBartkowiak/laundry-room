import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {Timer} from "./utils/timer";


import { AppComponent } from './app.component';

import { MachineService } from './machine.service';


import { ClientRoutingModule } from './app-routing.module';

import { MachineComponent } from './machine/machine.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    HomeComponent,
    Timer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClientRoutingModule    
  ],
  providers: [MachineService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
