import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../../../models/interfaces/weather'
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject()

  cityName = "São Paulo"
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherDatByCity(this.cityName)
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  getWeatherDatByCity(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (reponse) => {
          reponse && (this.weatherData = reponse)
        },
        error: (error) => console.log(error)
      })
  }

  onSubmit(): void {
    this.getWeatherDatByCity(this.cityName)
    this.cityName = ''
  }

}
