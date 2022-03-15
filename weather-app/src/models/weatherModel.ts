import { ICoords } from ".";

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface IWeatherMain {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level?: number;
  grnd_level?: number;
}
export interface IWind {
  speed?: number;
  deg?: number;
  gust?: number;
}
export interface IRain {
  '1h': number;
  '3h': number;
} 
export interface ISnow {
  '1h': number;
  '3h': number;
} 
export interface ISys {
  type: number;
  id: number; 
  message: number; 
  country: string; 
  sunrise: number; // Sunrise time, unix, UTC
  sunset: number; // Sunset time, unix, UTC
}

export interface IWeatherApiResponse {
  coord: ICoords;
  weather: IWeather[];
  base: string;
  main: IWeatherMain;
  visibility?: number;
  wind: IWind;
  clouds: {
    all: number;
  };
  rain?: IRain;
  snow?: ISnow;
  dt: number; // Time of data calculation, unix, UTC
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
