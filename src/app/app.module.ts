import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { NotfoundModule } from './pages/notfound/notfound.module';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { HomeModule } from './pages/home/home.module';
import {ComponentModule} from './component/component/component.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    HomeModule,
    NotfoundModule,
    RouterModule,
    ComponentModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
