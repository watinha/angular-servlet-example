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

  set(name: string): any {
      let params = (new HttpParams()).set('nome', name)
                                     .set('method', 'adicionar');
      return this.http.post('/fruta', params);
  }
}
