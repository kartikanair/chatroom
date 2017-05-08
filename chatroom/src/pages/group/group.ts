import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Group page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class Group {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotogroup()
  {
    this.navCtrl.push('Group');

  }
  gotochat()
  {
    this.navCtrl.push('Chats');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Group');
  }

}
