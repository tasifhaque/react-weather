import { Button } from "@/components/ui/button";
import { useGeoLocation } from "@/store/geoLocationStore";
import { useWeatherCondition } from "@/store/weatherConditionStore";
import { useWeather } from "@/store/weatherStore";
import { Cloud, Locate, MapPin, Sun } from "lucide-react";
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
          <p className="text-2xl font-medium">
            {location.city}, {location.country}
          </p>
        </div>

        <div className="flex items-center text-lg">
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
          src={`/assets/${icon}`}
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
      <main className="grid grid-cols-3 gap-4">
        <div className="border rounded p-3 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Forecast</h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between border-b pb-3 ">
              <div className="flex  gap-2">
                <Sun />
                <p>Tomorrow</p>
              </div>
              {/* <div><p>{weather?.daily.time}</p></div> */}
            </div>
            <div className="flex items-center justify-between border-b pb-3 ">
              <div className="flex  gap-2">
                <Sun />
                <p>Tomorrow</p>
              </div>
              {/* <div><p>{weather?.daily.time}</p></div> */}
            </div>
            <div className="flex items-center justify-between border-b pb-3 ">
              <div className="flex  gap-2">
                <Sun />
                <p>Tomorrow</p>
              </div>
              {/* <div><p>{weather?.daily.time}</p></div> */}
            </div>
            <div className="flex items-center justify-between border-b pb-3 ">
              <div className="flex  gap-2">
                <Sun />
                <p>Tomorrow</p>
              </div>
              {/* <div><p>{weather?.daily.time}</p></div> */}
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex  gap-2">
                <Sun />
                <p>Tomorrow</p>
              </div>
              {/* <div><p>{weather?.daily.time}</p></div> */}
            </div>
          </div>
        </div>
        <div className="border rounded ">
          <p className="font-semibold text-2xl p-3">Preceptation total</p>
          <div className="flex  flex-col p-3 border-b">
            <div className="flex items-center justify-between">
              <p>Last 24 Hours</p>
              <p>
                <span className="text-xl">3 </span>MM
              </p>
            </div>

            <div className="flex gap-1">
              <Cloud />
              <p>Rain</p>
            </div>
          </div>
          <div className="flex  flex-col p-3 border-b">
            <div className="flex items-center justify-between">
              <p>Last 24 Hours</p>
              <p>
                <span className="text-xl">3 </span>MM
              </p>
            </div>

            <div className="flex gap-1">
              <Cloud />
              <p>Rain</p>
            </div>
          </div>
          <div className="flex  flex-col p-3 ">
            <div className="flex items-center justify-between">
              <p>Last 24 Hours</p>
              <p>
                <span className="text-xl">3 </span>MM
              </p>
            </div>

            <div className="flex gap-1">
              <Cloud />
              <p>Rain</p>
            </div>
          </div>
        </div>
        <div className="border rounded p-3">
          <h2 className="font-semibold text-xl ">Comparison by Day</h2>
          <div className="flex flex-col gap-5 pt-3">
            <div className="flex items-center justify-between border-b pb-4">
              <h2>Today</h2>
              <div>
                <p>Progressbar</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <h2>Today</h2>
              <div>
                <p>Progressbar</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <h2>Today</h2>
              <div>
                <p>Progressbar</p>
              </div>
            </div>
            <div className="flex items-center justify-between  ">
              <h2>Today</h2>
              <div>
                <p>Progressbar</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
