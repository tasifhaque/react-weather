import { Calendar, ThermometerSnowflake, ThermometerSun } from "lucide-react";
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
            isAfter(
              new Date(new Date(time).toDateString()),
              new Date(new Date().toDateString())
            ) && (
              <div
                className="flex items-center justify-between py-3"
                key={index}
              >
                <div className="flex items-center gap-2 w-full">
                  <Calendar className="text-muted-foreground" />
                  <p>{format(new Date(time), "ccc,")}</p>
                  {format(new Date(weather?.daily?.sunrise[index]), "d MMM")}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center justify-start gap-1 w-18">
                    <ThermometerSun className="w-4 text-muted-foreground" />
                    {weather?.daily?.temperature_2m_min[index]}
                    {weather?.daily_units?.temperature_2m_min}
                  </div>
                  |
                  <div className="flex items-center justify-end gap-1 w-18">
                    <ThermometerSnowflake className="w-4 text-muted-foreground" />
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
