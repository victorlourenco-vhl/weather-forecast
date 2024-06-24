import { Component, Input } from '@angular/core';
import { WeatherData } from '../../../../models/interfaces/weather';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() weatherData!: WeatherData;

  minTemperatureIcon = faTemperatureLow
  maxTemperatureIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind


  ngOnInit(): void { }

}
