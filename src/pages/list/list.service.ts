import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()

export class ListAlumneService{

private alumneUrl = 'http://localhost:8080/escola/listAlumne';


constructor(private http: Http){}

  errorMessage: string;
  getAlumnes() {
      var a = this.http.get(this.alumneUrl)
                .map(res => res.json())
      return a;
  }
}