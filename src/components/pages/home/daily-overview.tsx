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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Daily Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col divide-y-2">
        {Array.from(
          [
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
          ],
          ({ icon: Icon, label, data }) => (
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <Icon className="text-muted-foreground" />
                <p>{label}</p>
              </div>
              {label === "Sunrise" || label === "Sunset"
                ? format(new Date(data as string), "hh:mm aa")
                : data}
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
};

export default DailyOverview;
