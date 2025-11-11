import { Sun, ThermometerSnowflake, ThermometerSun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWeather } from "@/store";
import { format, isAfter } from "date-fns";

const ForecastOverview = () => {
  const { weather } = useWeather();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Forecast</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col divide-y-2">
        {weather?.daily?.time?.map((time, index) => {
          return (
            isAfter(new Date(time), new Date()) && (
              <div className="flex items-center justify-between py-3">
                <div className="flex  gap-2">
                  <Sun />
                  {format(new Date(weather?.daily?.sunrise[index]), "d MMM,")}
                  <p>{format(new Date(time), "ccc")}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <ThermometerSun className="w-4" />
                    {weather?.daily?.temperature_2m_min[index]}
                    {weather?.daily_units?.temperature_2m_min}
                  </div>
                  -
                  <div className="flex items-center gap-1">
                    <ThermometerSnowflake className="w-4" />
                    {weather?.daily?.temperature_2m_max[index]}
                    {weather?.daily_units?.temperature_2m_max}
                  </div>
                </div>
              </div>
            )
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ForecastOverview;
