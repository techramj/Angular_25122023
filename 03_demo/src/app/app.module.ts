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


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerBlueprintComponent,
    ButtonCountComponent,
    MessageComponent,
    BannerComponent,
    CockpitExampleComponent,
    LifecycleComponent
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
