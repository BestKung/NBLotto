import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./unsecure/layout/layout.component";

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  // children: [
  //   {path: "dashboard", component: DashboardComponent, pathMatch: "full"},
  //
  // ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
