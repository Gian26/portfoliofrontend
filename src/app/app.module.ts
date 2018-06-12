import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorsComponent } from './errors/errors.component';

import { AgmCoreModule } from '@agm/core';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './service/alert.service';

import { ApiService } from'./service/api/api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlertComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEiWiYqq9VSA3_xP-tygX_ATMCN1Q6gfU'
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [AlertService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
