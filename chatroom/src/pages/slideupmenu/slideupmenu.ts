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

@Component({
  template: `
    <ion-tabs>
      <ion-tab tabIcon="heart" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="star" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
class MyApp {

  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = Chats;
    this.tab2 = Group;
  }
}
