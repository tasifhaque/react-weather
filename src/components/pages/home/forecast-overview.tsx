import { Calendar, ThermometerSnowflake, ThermometerSun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWeather } from "@/store";
import { format, isAfter } from "date-fns";

const ForecastOverview = () => {
  const { weather } = useWeather();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl lg:text-3xl">
          Forecast
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col divide-y-2">
        {weather?.daily?.time?.map((time, index) => {
          const isFutureDate = isAfter(
            new Date(new Date(time).toDateString()),
            new Date(new Date().toDateString())
          );

          if (!isFutureDate) return null;

          return (
            <div
              className="grid grid-cols-10 items-center gap-2 py-2 md:py-3"
              key={index}
            >
              <div className="col-span-4 flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0 text-muted-foreground md:h-5 md:w-5" />
                <p className="text-sm font-medium md:text-base">
                  {format(new Date(time), "ccc")}
                </p>
                <span className="hidden text-sm text-muted-foreground md:inline md:text-base">
                  , {format(new Date(weather?.daily?.sunrise[index]), "d MMM")}
                </span>
              </div>

              <div className="col-span-6 flex items-center justify-end gap-2 md:gap-4">
                <div className="flex w-14 items-center justify-end gap-1 text-sm md:w-20 md:text-base">
                  <ThermometerSnowflake className="h-3 w-3 shrink-0 text-cyan-500 md:h-4 md:w-4" />
                  <span>
                    {Math.round(weather?.daily?.temperature_2m_min[index])}
                    {weather?.daily_units?.temperature_2m_min}
                  </span>
                </div>

                <span className="text-muted-foreground/40">|</span>

                <div className="flex w-14 items-center justify-end gap-1 text-sm md:w-20 md:text-base">
                  <ThermometerSun className="h-3 w-3 shrink-0 text-orange-500 md:h-4 md:w-4" />
                  <span>
                    {Math.round(weather?.daily?.temperature_2m_max[index])}
                    {weather?.daily_units?.temperature_2m_max}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ForecastOverview;
