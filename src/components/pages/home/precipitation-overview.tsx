import { Cloud, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { add, format, sub } from "date-fns";
import { useWeather } from "@/store";

type IprecipitationSummaries = {
  icon: LucideIcon;
  label: string;
  data: string | number | undefined;
};

const PrecipitationOverview = () => {
  const { weather } = useWeather();

  const currentDateTimeISOString = format(new Date(), "yyyy-MM-dd'T'HH:'00'");

  const getLastHourPrecipitation = (): string => {
    const currentHourIndex = weather?.hourly?.time?.indexOf(
      currentDateTimeISOString
    );
    return `${weather?.hourly?.precipitation[currentHourIndex!].toFixed(2)} ${
      weather?.hourly_units?.precipitation
    }`;
  };

  const getLast24HourPrecipitation = (): string => {
    const prevDay = sub(new Date(currentDateTimeISOString), {
      days: 1,
    });
    const prevDateTimeISOString = format(
      new Date(prevDay),
      "yyyy-MM-dd'T'HH:'00'"
    );
    const prevDayHourIndex = weather?.hourly?.time?.indexOf(
      prevDateTimeISOString
    );
    const currentDayHourIndex = weather?.hourly?.time?.indexOf(
      currentDateTimeISOString
    );

    const precipitationSum = weather?.hourly?.precipitation?.reduce(
      (acc, curr, index) => {
        if (index >= prevDayHourIndex! && index <= currentDayHourIndex!) {
          return acc + curr;
        }
        return acc;
      },
      0
    );

    return `${precipitationSum?.toFixed(2)} ${
      weather?.hourly_units?.precipitation
    }`;
  };

  const getLastWeekPrecipitation = (): string => {
    const prevWeek = sub(new Date(currentDateTimeISOString), {
      days: 6,
    });
    const prevWeekDateTimeISOString = format(new Date(prevWeek), "yyyy-MM-dd");
    const prevWeekDayIndex = weather?.daily?.time?.indexOf(
      prevWeekDateTimeISOString
    );

    const currentWeekDateTimeISOString = format(new Date(), "yyyy-MM-dd");
    const currentWeekDayIndex = weather?.daily?.time?.indexOf(
      currentWeekDateTimeISOString
    );

    const precipitationSum = weather?.daily?.precipitation_sum?.reduce(
      (acc, curr, index) => {
        if (index >= prevWeekDayIndex! && index <= currentWeekDayIndex!) {
          return acc + curr;
        }
        return acc;
      },
      0
    );

    return `${precipitationSum?.toFixed(2)} ${
      weather?.daily_units?.precipitation_sum
    }`;
  };

  const getNextWeekPrecipitation = (): string => {
    const nextWeek = add(new Date(currentDateTimeISOString), {
      days: 6,
    });
    const nextWeekDateTimeISOString = format(new Date(nextWeek), "yyyy-MM-dd");
    const nextWeekDayIndex = weather?.daily?.time?.indexOf(
      nextWeekDateTimeISOString
    );
    const currentWeekDateTimeISOString = format(new Date(), "yyyy-MM-dd");
    const currentWeekDayIndex = weather?.daily?.time?.indexOf(
      currentWeekDateTimeISOString
    );

    const precipitationSum = weather?.daily?.precipitation_sum?.reduce(
      (acc, curr, index) => {
        if (index >= currentWeekDayIndex! && index <= nextWeekDayIndex!) {
          return acc + curr;
        }
        return acc;
      },
      0
    );

    return `${precipitationSum?.toFixed(2)} ${
      weather?.daily_units?.precipitation_sum
    }`;
  };
  const precipitationSummaries: IprecipitationSummaries[] = [
    {
      icon: Cloud,
      label: "in last 1 Hour",
      data: getLastHourPrecipitation(),
    },
    {
      icon: Cloud,
      label: "in last 24 Hour",
      data: getLast24HourPrecipitation(),
    },
    {
      icon: Cloud,
      label: "in last week",
      data: getLastWeekPrecipitation(),
    },

    {
      icon: Cloud,
      label: "for next 6 days",
      data: getNextWeekPrecipitation(),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Precipitation</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col divide-y-2">
        {precipitationSummaries.map(({ icon: Icon, data, label }, index) => {
          return (
            <div key={index} className="flex  flex-col py-3">
              <div className="flex gap-1">
                <Icon className="text-muted-foreground" />
                <p>Precipitation</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p>{data}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default PrecipitationOverview;
