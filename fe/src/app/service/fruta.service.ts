import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  constructor(private http: HttpClient) {
  }

  get(): any {
      let options = {
          params: new HttpParams().set('busca', '')
      };
      return this.http.get('/fruta', options);
  }
}
