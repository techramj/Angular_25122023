import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PeopleComponent } from './people/people.component';
import { FormsModule } from '@angular/forms';
import { ServerBlueprintComponent } from './server-blueprint/server-blueprint.component';
import { ElementSelectorComponent } from './selector/element-selector/element-selector.component';
import { ClassSelectorComponent } from './selector/class-selector/class-selector.component';
import { AttibuteSelectorComponent } from './selector/attibute-selector/attibute-selector.component';
import { SelectorComponent } from './selector/selector.component';
import { BasicComponent } from './basic/basic.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { EvenOddComponent } from './even-odd/even-odd.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleComponent,
    ServerBlueprintComponent,
    ElementSelectorComponent,
    ClassSelectorComponent,
    AttibuteSelectorComponent,
    SelectorComponent,
    BasicComponent,
    ServersComponent,
    ServerComponent,
    EvenOddComponent,
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
