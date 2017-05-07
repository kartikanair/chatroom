import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Chats} from "../chats/chats";
import {Group} from "../group/group";

/**
 * Generated class for the Slideupmenu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-slideupmenu',
  templateUrl: 'slideupmenu.html',
})
export class Slideupmenu {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slideupmenu');
  }

}


