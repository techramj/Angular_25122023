import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerBlueprintComponent } from './server-blueprint/server-blueprint.component';
import { ButtonCountComponent } from './button-count/button-count.component';
import { MessageComponent } from './message/message.component';
import { BannerComponent } from './banner/banner.component';
import { CockpitExampleComponent } from './cockpit-example/cockpit-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerBlueprintComponent,
    ButtonCountComponent,
    MessageComponent,
    BannerComponent,
    CockpitExampleComponent
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
