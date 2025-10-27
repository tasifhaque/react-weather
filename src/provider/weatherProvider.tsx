import { useGeoLocation } from "@/store/geoLocationStore";
import { useWeather } from "@/store/weatherStore";
import { useEffect, type ReactNode } from "react";

const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const { location } = useGeoLocation();

  const url = `https://corsproxy.io/?https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,cloudcover,visibility,windspeed_10m,winddirection_10m,soil_temperature_0cm,soil_moisture_0_1cm,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&past_days=6&timezone=auto&latitude=${location.latitude}&longitude=${location.longitude}`;
  const { getWeather } = useWeather();

  useEffect(() => {
    getWeather(url);
  }, [getWeather, url]);

  return children;
};

export default WeatherProvider;
