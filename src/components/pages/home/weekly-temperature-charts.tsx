import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWeather } from "@/store";
import { add, format } from "date-fns";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const WeeklyTemperatureCharts = () => {
  const { weather } = useWeather();

  const currentDateISOString = format(new Date(), "yyyy-MM-dd");
  const weekLastDate = add(new Date(currentDateISOString), {
    days: 6,
  });

  const weekLastDateISOString = format(new Date(weekLastDate), "yyyy-MM-dd");

  const currentWeekDayIndex =
    weather?.daily?.time?.indexOf(currentDateISOString);
  const weekLastDayIndex = weather?.daily?.time?.indexOf(weekLastDateISOString);

  const data = weather?.daily?.time
    ?.map((time, index) => {
      if (index >= currentWeekDayIndex! && index <= weekLastDayIndex!) {
        return {
          name: format(new Date(time), "dd MMM"),
          max: weather?.daily?.temperature_2m_max[index],
          min: weather?.daily?.temperature_2m_min[index],
        };
      }
    })
    .filter((item) => item !== undefined);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Weekly Temperature Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart responsive data={data} className="aspect-video">
          <CartesianGrid strokeDasharray="1 15" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Area
            type="natural"
            label="Maximum Temperature"
            dataKey="max"
            opacity={0.9}
          />
          <Area
            type="natural"
            label="Minimum Temperature"
            dataKey="min"
            opacity={0.5}
          />
        </AreaChart>
      </CardContent>
    </Card>
  );
};

export default WeeklyTemperatureCharts;
