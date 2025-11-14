import { NavLink, Outlet } from "react-router";
import ThemeSwitch from "@/components/ui/theme-switch";
import {
  CustomDropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
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
    <div className="container mx-auto py-5 flex flex-col gap-12">
      <header className="flex items-center justify-between ">
        <div className="flex items-center gap-10">
          <h1 className="font-black text-2xl">
            Re<span className="text-primary">Cast</span>
          </h1>
          {menuItems.map(({ link, label }) => (
            <NavLink
              key={link}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold text-primary underline underline-offset-2"
                    : "text-muted-foreground font-medium"
                }`
              }
              to={link}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
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
