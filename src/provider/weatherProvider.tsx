import { useGeoLocation } from "@/store/geoLocationStore";
import { useWeather } from "@/store/weatherStore";
import { useEffect, type ReactNode } from "react";

const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const { location } = useGeoLocation();
  const { weatherUnit, setWeatherUnit } = useWeather();

  useEffect(() => {
    setWeatherUnit("fahrenheit");
  }, [setWeatherUnit]);

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${
    location?.latitude
  }&longitude=${
    location?.longitude
  }&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&hourly=temperature_180m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,cloud_cover,visibility,wind_speed_180m,wind_direction_180m,soil_temperature_54cm,soil_moisture_27_to_81cm,is_day&models=best_match&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_direction_10m,wind_speed_10m&timezone=auto&past_days=7&${
    weatherUnit === "celcius" ? "" : "&temperature_unit=fahrenheit"
  }`;
  const { getWeather } = useWeather();

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getWeather(url);
    }
  }, [getWeather, url, location]);

  return children;
};

export default WeatherProvider;
