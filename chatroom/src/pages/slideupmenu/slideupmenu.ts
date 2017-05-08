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
  templateUrl: `slideupmenu.html`,
})
export class Slideupmenu {


  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = 'Chats';
    this.tab2 = 'Group';
  }
  gotogroup()
  {
    this.navCtrl.push('Group');

  }
  gotochat()
  {
  this.navCtrl.push('Chats');
  }

}
