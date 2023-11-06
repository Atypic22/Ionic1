import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TadeoPage } from './tadeo.page';

const routes: Routes = [
  {
    path: '',
    component: TadeoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TadeoPageRoutingModule {}
