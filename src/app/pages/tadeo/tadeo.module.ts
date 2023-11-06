import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TadeoPageRoutingModule } from './tadeo-routing.module';

import { TadeoPage } from './tadeo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TadeoPageRoutingModule
  ],
  declarations: [TadeoPage]
})
export class TadeoPageModule {}
