import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cat } from '../models/cat';
import { Fact } from '../models/fact';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'x-api-key': '13a61609-48f3-44ee-8f4c-75814936f2a6'
  })
} 

@Injectable({
  providedIn: 'root'
})

export class CatsService {

constructor(private http: HttpClient) { }

url: string = 'https://api.thecatapi.com/v1';

getCats():Observable<Cat[]>{
  //get todos os eventos
  return this.http.get<Cat[]>(`${this.url}/images/search`, httpOptions);
}

getFacts():Observable<Fact[]>{
  //get todos os eventos
  return this.http.get<Fact[]>(`${this.url}/fact`, httpOptions);
}

}
