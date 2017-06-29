import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListMarcaService} from './list.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
    providers: [ListMarcaService]
})
export class ListPage {

  marques;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listMarcaService: ListMarcaService) {   
    
   
  }
 getMarca(){
     var a = 'http://localhost:8080/cotxe/listMarcap';  
      
     this.listMarcaService.getMarca()
        .subscribe(
                data => { this.marques = data;console.log(this.marques);},
                err => console.error(err))  
                
    
    }
}