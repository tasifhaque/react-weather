import { createRoot } from "react-dom/client";
import "@/index.css";
import ThemeProvider from "@/provider/themeProvider.tsx";
import { RouterProvider } from "react-router";
import { router } from "@/utils/route.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
