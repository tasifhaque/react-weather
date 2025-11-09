import { Button } from "@/components/ui/button";
import { useGeoLocation } from "@/store/geoLocationStore";
import { useWeatherCondition } from "@/store/weatherConditionStore";
import { useWeather } from "@/store/weatherStore";
import { Locate, MapPin } from "lucide-react";
import { format } from "date-fns";

const Home = () => {
  const { location, preciseLocation, getLocation, setLocationPermission } =
    useGeoLocation();

  const { weather, weatherLoading } = useWeather();

  const { condition, icon } = useWeatherCondition(
    weather?.current?.weather_code,
    weather?.current.is_day
  );

  return weatherLoading ? (
    "Loading..."
  ) : (
    <section className="flex flex-col gap-20">
      <div>
        <div className="flex items-center gap-3">
          <MapPin size={20} className="text-muted-foreground" />
          <p className="text-lg font-medium">
            {location.city}, {location.country}
          </p>
        </div>

        <div className="flex items-center">
          <p>
            {preciseLocation ? "Precise Location" : "Your Internet Location"}
          </p>
          <Button
            className="p-0 underline text-muted-foreground cursor-pointer"
            variant="link"
            onClick={() => {
              if (preciseLocation) {
                getLocation();
              } else {
                setLocationPermission(true);
              }
            }}
          >
            <Locate />
            {preciseLocation ? "Locate again" : "Get precise location"}
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img
          className="w-25 aspect-square object-scale-down"
          src={`/src/assets/${icon}`}
          alt="clouds"
        />
        <div className="flex items-end gap-5 font-bold text-4xl">
          <h1 className="text-6xl font-black">{condition},</h1>
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
    </section>
  );
};

export default Home;
