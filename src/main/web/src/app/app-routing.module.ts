import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./unsecure/layout/layout.component";
import {DashboardComponent} from "./unsecure/dashboard/dashboard.component";
import {LottoHisComponent} from "./unsecure/lotto-his/lotto-his.component";

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: "dashboard", component: DashboardComponent, pathMatch: "full"},
    {path: "lotto-his", component: LottoHisComponent, pathMatch: "full"},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
