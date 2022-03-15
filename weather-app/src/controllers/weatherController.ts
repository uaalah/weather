import { ICity, IWeatherApiResponse } from '../models'
import { get } from '../services'

const API_KEY = 'd446ca9f3276b0600bb817cdc55c8770'
const API_BASE_URL = 'https://api.openweathermap.org'
const API_LOCATIONS_LIMIT = 10
const API_UNITS = 'metric'
const API_LANG = 'es'

export const getLoaction = async(name: string): Promise<ICity[]> => {
  const url = `${API_BASE_URL}/geo/1.0/direct?q=${name}&limit=${API_LOCATIONS_LIMIT}&APPID=${API_KEY}`
  const result = await get(url)
  return result
}

export const getWeather: (lat: number, lon: number) => Promise<IWeatherApiResponse> = async(lat, lon) => {
  const url = `${API_BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${API_UNITS}&lang=${API_LANG}&APPID=${API_KEY}`
  const result = await get(url)
  return result;
}

export const matchLocations: (options: ICity[], list: ICity[]) => ICity[] = (options, list) => {
  const aux_options: string[] = options.map(option => JSON.stringify(option));
  const aux_list: string[] = list.map(item => JSON.stringify(item));
  const aux_clean: string[] = aux_options.filter(option => !aux_list.includes(option));
  const clean_options: ICity[] = aux_clean.map(item => JSON.parse(item));
  return clean_options;
}