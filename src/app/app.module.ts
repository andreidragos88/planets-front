import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {routing} from "./app.routing";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetFormComponent } from './planet-form/planet-form.component';
import { PlanetService } from './service/planet.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {TokenInterceptor} from "./core/interceptor";

import { AuthService } from "./service/auth.service";
import { AuthGuard } from "./auth.guard";
import { AuthCaptainGuard } from "./authCaptain.guard";
import { SecureInnerPagesGuard } from "./secure-inner-pages.guard";

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetFormComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
  	{provide: AuthService, deps: [HttpClient]},
  	{provide: PlanetService, deps: [HttpClient]},
  	{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi : true},
  	AuthGuard, AuthCaptainGuard, SecureInnerPagesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
