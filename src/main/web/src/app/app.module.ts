import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './unsecure/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { LottoHisComponent } from './unsecure/lotto-his/lotto-his.component';
import { DashboardComponent } from './unsecure/dashboard/dashboard.component';
import { AnalyzeComponent } from './unsecure/analyze/analyze.component';
import { WebboardComponent } from './unsecure/webboard/webboard.component';
import { LoginComponent } from './unsecure/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LottoHisComponent,
    DashboardComponent,
    AnalyzeComponent,
    WebboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
