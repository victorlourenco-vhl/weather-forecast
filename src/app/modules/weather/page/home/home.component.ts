import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // throw new Error("Método ainda não implementado")
  }

  getWeatherDatByCity(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (reponse) => {
        console.log(reponse)
      },
      error: (error) => console.log(error)
    })
  }

}
