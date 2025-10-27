import { Button } from "@/components/ui/button";
import { useTheme } from "@/store/themeStore";
import { Moon, Sun } from "lucide-react";
import { NavLink, Outlet } from "react-router";

const menuItems = [
  { link: "/", label: "Home" },
  { link: "/hourly", label: "Hourly" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();

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
          <Button onClick={toggleTheme} size="icon" variant="outline">
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
