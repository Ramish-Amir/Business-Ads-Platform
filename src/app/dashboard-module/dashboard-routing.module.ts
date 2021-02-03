import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {TestComponent} from '../test/test.component';
import {AssetLibraryComponent} from '../asset-library/asset-library.component';
import {SpotlightManagerComponent} from '../spotlight-manager/spotlight-manager.component';
import {SpotlightCreatorComponent} from '../spotlight-creator/spotlight-creator.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: '', component: SpotlightManagerComponent
      },
      {
        path: 'spotlight-creator', component: SpotlightCreatorComponent
      },
      {
        path: 'assets', component: AssetLibraryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
