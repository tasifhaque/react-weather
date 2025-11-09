import type { IWeather } from "@/types/weather";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WeatherType = {
  weather: IWeather | null;
  weatherUnit: "celcius" | "fahrenheit";
  weatherLoading: boolean;
  weatherError: boolean;
  lastFetched: Date;
  getWeather: (url: string) => void;
  setWeatherUnit: (unit: "celcius" | "fahrenheit") => void;
  toggleWeatherUnit: () => void;
};

export const useWeather = create<WeatherType>()(
  persist(
    (set, get) => {
      return {
        weather: null,
        weatherUnit: "celcius",
        weatherLoading: false,
        weatherError: false,
        lastFetched: new Date(),
        getWeather: (url) => {
          set({ weatherLoading: true });
          fetch(url)
            .then((response) => response.json())
            .then((data: IWeather) => {
              set({
                weather: data,
                weatherLoading: false,
                weatherError: false,
                lastFetched: new Date(),
              });
            })
            .catch(() => {
              set({ weatherLoading: false, weatherError: true });
            });
        },
        setWeatherUnit: (unit) => set({ weatherUnit: unit }),
        toggleWeatherUnit: () =>
          set({
            weatherUnit:
              get().weatherUnit === "celcius" ? "fahrenheit" : "celcius",
          }),
      };
    },
    { name: "weather" }
  )
);
