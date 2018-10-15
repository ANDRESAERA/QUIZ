import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { PhonePage } from '../phone/phone';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  bocina = BocinaPage;
  tv =TvPage;
  phone = PhonePage;
  lampara= LamparaPage;

  constructor(public navCtrl: NavController) {

  }
  Bocina(){
    this.navCtrl.push(this.bocina);
  }
  TV(){
    this.navCtrl.push(this.tv);
  }
  
  Lampara(){
    this.navCtrl.push(this.lampara);
  }
  
  Phone(){
    this.navCtrl.push(this.phone);
  }


}
