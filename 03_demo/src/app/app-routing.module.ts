import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogDashboardComponent } from './log-dashboard/log-dashboard.component';
import { BannerComponent } from './example2/banner/banner.component';
import { ServiceExample2Component } from './service-example2/service-example2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmpNotFoundComponent } from './emp-not-found/emp-not-found.component';
import { QueryParamExampleComponent } from './query-param-example/query-param-example.component';
import { ObservableOneComponent } from './observable/observable-one/observable-one.component';
import { ObservableTwoComponent } from './observable/observable-two/observable-two.component';
import { ObservableThreeComponent } from './observable/observable-three/observable-three.component';
import { ObservableFourComponent } from './observable/observable-four/observable-four.component';
import { Promise01Component } from './promise/promise-01/promise-01.component';
import { Promise02Component } from './promise/promise-02/promise-02.component';

const routes: Routes = [
  {path:'dashboard', component:LogDashboardComponent},
  {path:'banner', component:BannerComponent},
  {path:'service-example', component:ServiceExample2Component},
  {path:'emp/:name', component:EmployeesComponent},
  {path:'emp-not-found', component:EmpNotFoundComponent},
  {path:'query-param', component:QueryParamExampleComponent},
  {path:'observable1', component: ObservableOneComponent},
  {path:'observable2', component:ObservableTwoComponent},
  {path: 'observable3', component:ObservableThreeComponent},
  {path: 'observable4', component: ObservableFourComponent},
  {path: 'promise1', component:Promise01Component},
  {path: 'promise2', component:Promise02Component},
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
