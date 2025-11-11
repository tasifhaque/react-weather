import Location from "@/components/pages/home/location";
import Weather from "@/components/pages/home/weather";
import ForecastOverview from "@/components/pages/home/forecast-overview";
import Precipitationoverview from "@/components/pages/home/precipitation-overview";
import DayOverview from "@/components/pages/home/daily-overview";

const Home = () => {
  return (
    <section className="flex flex-col gap-20">
      <Location />
      <Weather />
      <main className="grid grid-cols-3 gap-4">
        <DayOverview/>
        <ForecastOverview />
        <Precipitationoverview />
        
      </main>
      <footer className="grid grid-cols-2 gap-4">
        <div>weekly charts</div>
        <div>hourly charts</div>
      </footer>
    </section>
  );
};

export default Home;
