import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chatscreen } from './chatscreen';

@NgModule({
  declarations: [
    Chatscreen,
  ],
  imports: [
    IonicPageModule.forChild(Chatscreen),
  ],
  exports: [
    Chatscreen
  ]
})
export class ChatscreenModule {}
