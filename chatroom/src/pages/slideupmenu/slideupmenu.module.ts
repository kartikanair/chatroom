import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Slideupmenu } from './slideupmenu';

@NgModule({
  declarations: [
    Slideupmenu,
  ],
  imports: [
    IonicPageModule.forChild(Slideupmenu),
  ],
  exports: [
    Slideupmenu
  ]
})
export class SlideupmenuModule {}
