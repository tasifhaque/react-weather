import { useWeather } from "@/store";
import { format } from "date-fns";

const Weather = () => {
  const { weather, getWeatherStatus } = useWeather();

  const { condition, icon } = getWeatherStatus(
    weather?.current?.weather_code,
    weather?.current.is_day
  );

  return (
    <div>
      <div className="flex items-center gap-5">
        <img
          className="w-25 aspect-square object-scale-down"
          src={`/assets/${icon}`}
          alt="clouds"
          draggable={false}
        />
        <div className="flex items-end gap-5 font-bold text-4xl">
          <h1 className="text-5xl font-black">{condition},</h1>
          <h1 className="text-muted-foreground">
            {weather?.current?.temperature_2m}
            <sup className="text-xl">
              {weather?.current_units?.temperature_2m}
            </sup>
          </h1>
          <h1 className="text-muted-foreground text-4xl">
            {format(new Date(), "cccc")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Weather;
