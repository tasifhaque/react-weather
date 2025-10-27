import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router";
import { router } from "@/utils/route.tsx";
import { LocationProvider, ThemeProvider, WeatherProvider } from "@/provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <LocationProvider>
      <WeatherProvider>
        <RouterProvider router={router} />
      </WeatherProvider>
    </LocationProvider>
  </ThemeProvider>
);
