import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

 getCep(): Observable<any> {
    return this.http.get('viacep.com.br/ws/01001000/json/');
  }

}
