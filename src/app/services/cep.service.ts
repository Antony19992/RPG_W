import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

 getCep(valor: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}ws/${valor}/json/`);
  }

}
