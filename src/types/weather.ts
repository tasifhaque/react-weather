export interface IWeather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: ICurrentWeatherUnits;
  current_weather: ICurrentWeather;
  hourly_units: IHourlyUnits;
  hourly: IHourly;
  daily_units: IDailyUnits;
  daily: IDaily;
}

export interface ICurrentWeatherUnits {
  time: string;
  interval: string;
  temperature: string;
  windspeed: string;
  winddirection: string;
  is_day: string;
  weathercode: string;
}

export interface ICurrentWeather {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}

export interface IHourlyUnits {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  apparent_temperature: string;
  precipitation_probability: string;
  precipitation: string;
  weathercode: string;
  cloudcover: string;
  visibility: string;
  windspeed_10m: string;
  winddirection_10m: string;
  soil_temperature_0cm: string;
  soil_moisture_0_1cm: string;
  uv_index: string;
  is_day: string;
}

export interface IHourly {
  time: string[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  apparent_temperature: number[];
  precipitation_probability: number[];
  precipitation: number[];
  weathercode: number[];
  cloudcover: number[];
  visibility: number[];
  windspeed_10m: number[];
  winddirection_10m: number[];
  soil_temperature_0cm: number[];
  soil_moisture_0_1cm: number[];
  uv_index: number[];
  is_day: number[];
}

export interface IDailyUnits {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  sunrise: string;
  sunset: string;
  uv_index_max: string;
  precipitation_sum: string;
  precipitation_hours: string;
  precipitation_probability_max: string;
  windspeed_10m_max: string;
  winddirection_10m_dominant: string;
}

export interface IDaily {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
  precipitation_sum: number[];
  precipitation_hours: number[];
  precipitation_probability_max: number[];
  windspeed_10m_max: number[];
  winddirection_10m_dominant: number[];
}