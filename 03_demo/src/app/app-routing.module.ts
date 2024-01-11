import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogDashboardComponent } from './log-dashboard/log-dashboard.component';
import { BannerComponent } from './example2/banner/banner.component';
import { ServiceExample2Component } from './service-example2/service-example2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'dashboard', component:LogDashboardComponent},
  {path:'banner', component:BannerComponent},
  {path:'service-example', component:ServiceExample2Component},
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
