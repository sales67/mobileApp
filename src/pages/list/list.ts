import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListAlumneService} from './list.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
    providers: [ListAlumneService]
})
export class ListAlumneComponent {

  alumnes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listAlumneService: ListAlumneService) {   
    
   
  }
 getAlumnes(){
     this.listAlumneService.getAlumnes()
        .subscribe(
                data => { this.alumnes = data;console.log(this.alumnes);},
                err => console.error(err))               
    
    }
}