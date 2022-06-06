import { City } from './../../../models/city';
import { WeatherService } from './../../../services/weather.service';
import { SearchService } from './../../../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  citys:City[];
cityname:string=""
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
  }
  getWeatherInf () {

    let list1 = []
    this.weatherService.getWeather(this.cityname).subscribe(data =>{
      
        console.log(this.cityname)
        list1.push(data)
      });
      this.citys=list1
    }

}
