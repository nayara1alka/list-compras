import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

import { Lista } from '../lista'
import { Imagens } from '../imagens'

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private readonly API = `${environment.baseURL}`

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Lista[]>(`${this.API}lista`);
  }

  criar(item:any):Observable<any>{
   return this.http.post(`${this.API}lista`, item).pipe(take(1));
  }

  images(){
    return this.http.get<Imagens[]>(`${this.API}imagens`)
  }
  
}