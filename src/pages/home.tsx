import Location from "@/components/pages/home/location";
import Weather from "@/components/pages/home/weather";
import ForecastOverview from "@/components/pages/home/forecast-overview";
import Precipitationoverview from "@/components/pages/home/precipitation-overview";
import DailyOverview from "@/components/pages/home/daily-overview";
import { useWeather } from "@/store";
import WeeklyTemperatureCharts from "@/components/pages/home/weekly-temperature-charts";
import HourlyTemperatureChart from "@/components/pages/home/hourly-temperature-chart";

const Home = () => {
  const { weather } = useWeather();

  return weather ? (
    <section className="flex flex-col gap-4">
      <Location />
      <Weather />
      <main className="grid grid-cols-3 gap-4">
        <DailyOverview />
        <ForecastOverview />
        <Precipitationoverview />
      </main>
      <div className="grid grid-cols-2 gap-4">
        <WeeklyTemperatureCharts/>
        <HourlyTemperatureChart/>
      </div>
    </section>
  ) : (
    "Loading..."
  );
};

export default Home;
