import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class ListMarcaService{

private marcaUrl = 'http://localhost:8080/cotxe/listMarca';


constructor(private http: Http){}

  errorMessage: string;
  getMarca() {
      var a = this.http.get(this.marcaUrl)
                .map(res => res.json())
      return a;
  }
}