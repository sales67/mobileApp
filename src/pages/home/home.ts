import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    styleUrls: ['/home/home.scss']
})
export class HomePage {  
    
    constructor(private alertCtrl: AlertController) {}
    
    ferrari;lamborghini;renault;send;    

    enviat() {
    
    if(this.ferrari || this.lamborghini || this.renault){
        let alert = this.alertCtrl.create({      
    title: 'Correcte',
    subTitle: 'Has entrat les dades correctament',
    buttons: ['Dismiss']
        });
         alert.present();
    }
    else{
        let alert = this.alertCtrl.create({      
    title: 'Error',
    subTitle: 'has de seleccionar un camp',
    buttons: ['Dismiss']
  });
         alert.present();
    }
    
  
 // alert.present();
}
    
    
}
