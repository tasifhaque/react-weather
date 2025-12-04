import {
  Sunrise,
  Sunset,
  ThermometerSnowflake,
  ThermometerSun,
  Umbrella,
  Wind,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWeather } from "@/store";
import { format } from "date-fns";

const DailyOverview = () => {
  const { weather } = useWeather();

  const todaysDate = format(new Date(), "yyyy-MM-dd");

  const todaysWeatherIndex = weather?.daily?.time?.indexOf(todaysDate);

  const a = [
    {
      icon: Sunrise,
      label: "Sunrise",
      data: weather?.daily?.sunrise[todaysWeatherIndex as number],
    },
    {
      icon: Sunset,
      label: "Sunset",
      data: weather?.daily?.sunset[todaysWeatherIndex as number],
    },
    {
      icon: ThermometerSun,
      label: "Maximum Temperture",
      data: `${
        weather?.daily?.temperature_2m_max[todaysWeatherIndex as number]
      } ${weather?.daily_units?.temperature_2m_max}`,
    },
    {
      icon: ThermometerSnowflake,
      label: "Minimum Temperture",
      data: `${
        weather?.daily?.temperature_2m_min[todaysWeatherIndex as number]
      } ${weather?.daily_units?.temperature_2m_min}`,
    },
    {
      icon: Umbrella,
      label: "Precipitation Sum",
      data: `${
        weather?.daily?.precipitation_sum[todaysWeatherIndex as number]
      } ${weather?.daily_units?.precipitation_sum}`,
    },
    {
      icon: Wind,
      label: "Wind Speed",
      data: `${
        weather?.daily?.wind_speed_10m_max[todaysWeatherIndex as number]
      } ${weather?.daily_units?.wind_speed_10m_max}`,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl lg:text-3xl">
          Daily Overview
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col divide-y-2">
        {Array.from(a, ({ icon: Icon, label, data }, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 md:py-3"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <Icon className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />

              <p className="text-sm md:text-base font-medium text-foreground/80">
                {label}
              </p>
            </div>

            <p className="text-sm md:text-base font-semibold">
              {label === "Sunrise" || label === "Sunset"
                ? format(new Date(data as string), "hh:mm aa")
                : data}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DailyOverview;
