import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router";
import { router } from "@/utils/route.tsx";
import { LocationProvider, ThemeProvider } from "@/provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <LocationProvider>
      <RouterProvider router={router} />
    </LocationProvider>
  </ThemeProvider>
);
