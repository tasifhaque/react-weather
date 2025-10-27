import type { IWeather } from "@/types/weather";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WeatherType = {
  weather: IWeather | null;
  weatherLoading: boolean;
  weatherError: boolean;
  lastFetched: Date;
  getWeather: (url: string) => void;
};

export const useWeather = create<WeatherType>()(
  persist(
    (set) => {
      return {
        weather: null,
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
      };
    },
    { name: "weather" }
  )
);
