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
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
        <img
          className="aspect-square w-32 object-contain md:w-40"
          src={`/assets/${icon}`}
          alt="clouds"
          draggable={false}
        />

        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:gap-5 md:text-left">
          <h1 className="text-3xl font-black md:text-5xl">
            {condition}
            <span className="hidden md:inline">,</span>
          </h1>

          <h1 className="text-3xl font-bold text-muted-foreground md:text-4xl">
            {weather?.current?.temperature_2m}
            <sup className="text-lg md:text-xl">
              {weather?.current_units?.temperature_2m}
            </sup>
          </h1>

          <h1 className="text-xl font-bold text-muted-foreground md:text-4xl">
            {format(new Date(), "cccc")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Weather;
