import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CatsPage } from '../cats/cats'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToNext(num){
      this.navCtrl.push(CatsPage,{
        cat:num
      });
  }

}
