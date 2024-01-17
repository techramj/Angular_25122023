import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { ButtonCountComponent } from './example2/button-count/button-count.component';
import { MessageComponent } from './example2/message/message.component';
import { BannerComponent } from './example2/banner/banner.component';
import { CockpitComponent } from './example1/cockpit/cockpit.component';
import { ServerBlueprintComponent } from './example1/server-blueprint/server-blueprint.component';
import { CockpitExampleComponent } from './example1/cockpit-example/cockpit-example.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { Comp1Component } from './service-example1/comp1/comp1.component';
import { Comp2Component } from './service-example1/comp2/comp2.component';
import { Comp3Component } from './service-example1/comp3/comp3.component';
import { Comp4Component } from './service-example2/comp4/comp4.component';
import { Comp5Component } from './service-example2/comp5/comp5.component';
import { ServiceExample2Component } from './service-example2/service-example2.component';
import { Comp6Component } from './service-example2/comp6/comp6.component';
import { LogDashboardComponent } from './log-dashboard/log-dashboard.component';
import { LogService } from './log.service';
import { HeaderComponent } from './header/header.component';
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
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerBlueprintComponent,
    ButtonCountComponent,
    MessageComponent,
    BannerComponent,
    CockpitExampleComponent,
    LifecycleComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    ServiceExample2Component,
    Comp6Component,
    LogDashboardComponent,
    HeaderComponent,
    PageNotFoundComponent,
    EmployeesComponent,
    EmpNotFoundComponent,
    QueryParamExampleComponent,
    ObservableOneComponent,
    ObservableTwoComponent,
    ObservableThreeComponent,
    ObservableFourComponent,
    Promise01Component,
    Promise02Component,
    EmpListComponent,
    EmpEditComponent,
    EmpCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
