import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import {DashboardModule} from './dashboard-module/dashboard.module';
import { AssetLibraryComponent } from './asset-library/asset-library.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SpotlightManagerComponent } from './spotlight-manager/spotlight-manager.component';
import { SpotlightCreatorComponent } from './spotlight-creator/spotlight-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetLibraryComponent,
    SpotlightManagerComponent,
    SpotlightCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
