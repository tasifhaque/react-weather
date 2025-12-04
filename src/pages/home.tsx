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
    <section className="flex flex-col gap-4 p-4 md:p-6">
      <Location />
      <Weather />

      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="md:col-span-2 xl:col-span-1">
          <DailyOverview />
        </div>
        <ForecastOverview />
        <Precipitationoverview />
      </main>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <WeeklyTemperatureCharts />
        <HourlyTemperatureChart />
      </div>
    </section>
  ) : (
    <div className="flex h-screen items-center justify-center">Loading...</div>
  );
};

export default Home;
