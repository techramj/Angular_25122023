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
    Comp6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
