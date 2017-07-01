import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { FooterModule } from './footer/footer.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import 'hammerjs';

export const config = {
    apiKey: "AIzaSyCJ-mj_VRzyms0XGJz8MXH2PmIjWE6T6DM",
    authDomain: "hoang-long-hotel.firebaseapp.com",
    databaseURL: "https://hoang-long-hotel.firebaseio.com",
    projectId: "hoang-long-hotel",
    storageBucket: "hoang-long-hotel.appspot.com",
    messagingSenderId: "843555283760"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    AngularMaterialModule,
    BodyModule,
    FooterModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
