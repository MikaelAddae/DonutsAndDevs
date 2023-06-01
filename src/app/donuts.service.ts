import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donuts, Result } from './donuts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  urlAllDonuts:string="https://grandcircusco.github.io/demo-apis/donuts.json";
  
  constructor(private http:HttpClient) { }

  

  getAllDonuts():Observable<Donuts>{
    return this.http.get<Donuts>(this.urlAllDonuts);
    
  }
}
