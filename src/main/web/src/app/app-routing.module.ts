import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./unsecure/layout/layout.component";
import {LottoHisComponent} from "./unsecure/lotto-his/lotto-his.component";
import {WebboardComponent} from "./unsecure/webboard/webboard.component";
import {AnalyzeComponent} from "./unsecure/analyze/analyze.component";
import {LoginComponent} from "./unsecure/login/login.component";

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: "lotto-his", component: LottoHisComponent, pathMatch: "full"},
    {path: "analyze", component: AnalyzeComponent, pathMatch: "full"},
    {path: "webboard", component: WebboardComponent, pathMatch: "full"},
    {path: "login", component: LoginComponent, pathMatch: "full"},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
