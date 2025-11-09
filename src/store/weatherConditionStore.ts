type weatherConditionType = {
  condition: string | undefined;
  icon: null | string;
};

type weatherType = {
  [key: number]: string;
};

export const useWeatherCondition = (
  code: number | undefined,
  isDay: number | undefined
): weatherConditionType => {
  const day = Boolean(isDay);
  const weatherCode: weatherType = {
    0: "Clear",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing Fog",
    51: "Light Drizzle",
    53: "Medium Drizzle",
    55: "Dense Drizzle",
    56: "Light frosty Drizzle",
    57: "Dense frosty Drizzle",
    61: "Slight Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    66: "Light frosty Rain",
    67: "heavy frosty Rain",
    71: "Slight Snow Fall",
    73: "moderate Snow Fall",
    75: "heavy Snow Fall",
    77: "Snow Grains",
    80: "Slight Rain Showers",
    81: "Moderate Rain Showers",
    82: "Violent Rain Showers",
    85: "slight Snow Showers",
    86: "heavy Snow Showers",
    95: "Thunderstorm",
    96: "Thunderstorm with Slight Hail",
    99: "Thunderstorm with Medium Hail",
  };

  const weatherIcon: weatherType = {
    0: day ? "0.png" : "0_1.png",
    1: day ? "1.png" : "1_1.png",
    2: day ? "1.png" : "1_1.png",
    3: day ? "1.png" : "1_1.png",
    45: day ? "45.png" : "45_1.png",
    48: day ? "45.png" : "45_1.png",
    51: day ? "51.png" : "51_1.png",
    53: day ? "51.png" : "51_1.png",
    55: day ? "51.png" : "51_1.png",
    56: day ? "56.png" : "56_1.png",
    57: day ? "56.png" : "56_1.png",
    61: day ? "61.png" : "61_1.png",
    63: day ? "63.png" : "63.png",
    65: day ? "63.png" : "63.png",
    66: day ? "66.png" : "66_1.png",
    67: day ? "66.png" : "66_1.png",
    71: day ? "56.png" : "56_1.png",
    73: day ? "66.png" : "66_1.png",
    75: day ? "66.png" : "66_1.png",
    77: day ? "77.png" : "77_1.png",
    80: day ? "61.png" : "61_1.png",
    81: day ? "61.png" : "61_1.png",
    82: day ? "63.png" : "63.png",
    85: day ? "56.png" : "56_1.png",
    86: day ? "66.png" : "66_1.png",
    95: day ? "95.png" : "95_1.png",
    96: day ? "96.png" : "96.png",
    99: day ? "96.png" : "96.png",
  };

  if (code === undefined || isDay === undefined) {
    return { condition: "Clear", icon: "0.png" };
  }

  return { condition: weatherCode[code], icon: weatherIcon[code] };
};
