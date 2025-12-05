import { NavLink, Outlet } from "react-router";
import ThemeSwitch from "@/components/ui/theme-switch";
import {
  CustomDropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import WeatherUnitSwitch from "./ui/weather-unit-switch";

const menuItems = [
  { link: "/", label: "Home" },
  // { link: "/hourly", label: "Hourly" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-4 py-4 md:py-5 flex flex-col gap-6 md:gap-12">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-10">
          <h1 className="font-black text-xl md:text-2xl">
            Re<span className="text-primary">Cast</span>
          </h1>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map(({ link, label }) => (
              <NavLink
                key={link}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold text-primary underline underline-offset-2"
                      : "text-muted-foreground font-medium"
                  } hover:text-primary transition-colors`
                }
                to={link}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="md:hidden">
                {menuItems.map(({ link, label }) => (
                  <DropdownMenuItem key={link} asChild>
                    <NavLink
                      to={link}
                      className={({ isActive }) =>
                        `w-full cursor-pointer ${
                          isActive ? "text-primary font-bold" : ""
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
              </div>

              <DropdownMenuLabel>General Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <CustomDropdownMenuItem>
                Theme <ThemeSwitch />
              </CustomDropdownMenuItem>
              <CustomDropdownMenuItem>
                Weather Unit <WeatherUnitSwitch />
              </CustomDropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
