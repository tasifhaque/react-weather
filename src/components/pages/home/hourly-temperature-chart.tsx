import { useWeather } from "@/store";
import { add, format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const HourlyTemperatureChart = () => {
  const { weather } = useWeather();
  const currentDateTimeISOString = format(new Date(), "yyyy-MM-dd'T'HH:'00'");

  const currentDayIndex = weather?.hourly?.time?.indexOf(
    currentDateTimeISOString
  );

  const nextDate = add(new Date(currentDateTimeISOString), {
    hours: 24,
  });
  const nextDateTimeISOString = format(
    new Date(nextDate),
    "yyyy-MM-dd'T'HH:'00'"
  );
  const nextDateIndex = weather?.hourly?.time?.indexOf(nextDateTimeISOString);

  const data = weather?.hourly?.time
    ?.map((time, index) => {
      if (index >= currentDayIndex! && index < nextDateIndex!) {
        return {
          name: format(new Date(time), "hh:mm aa"),
          temperature: weather?.hourly?.temperature_180m[index],
        };
      }
    })
    .filter((item) => item != undefined);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Hourly Temperature Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart responsive data={data} className="aspect-video">
          <CartesianGrid strokeDasharray="1 15" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Area
            type="natural"
            label="Temperature"
            dataKey="temperature"
            fill="#9a031e"
            strokeWidth={0}
          />
        </AreaChart>
      </CardContent>
    </Card>
  );
};

export default HourlyTemperatureChart;
