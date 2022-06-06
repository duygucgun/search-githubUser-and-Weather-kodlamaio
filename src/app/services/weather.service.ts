import { City } from '../models/city';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getWeather(val:string):Observable<City[]>{
    
    return this.httpClient.get<City[]>(`http://api.weatherstack.com/current?access_key=d0cf22007e01209afdf1dcea01c4b896&query=${val}`)
    
  }
   
}