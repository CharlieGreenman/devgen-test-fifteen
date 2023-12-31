import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@devgen-test-fifteen/common/ui";
import { GlobalFooterModule } from "@devgen-test-fifteen/common/ui";
import { GlobalSidenavModule } from "@devgen-test-fifteen/common/ui";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule, GlobalSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
