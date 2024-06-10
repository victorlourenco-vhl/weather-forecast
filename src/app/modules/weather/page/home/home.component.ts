import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../../../models/interfaces/weather'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  cityName = "São Paulo"
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatByCity(this.cityName)
  }

  getWeatherDatByCity(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (reponse) => {
        reponse && (this.weatherData = reponse)
        console.log(this.weatherData)
      },
      error: (error) => console.log(error)
    })
  }

}
