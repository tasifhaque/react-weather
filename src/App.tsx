import { Button } from "@/components/ui/button";
import { useTheme } from "@/store/themeStore";
import { Sun, Moon } from "lucide-react";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section>
      <p>main page</p>
      <Button onClick={toggleTheme} size="icon" className="gap-3">
        {theme === "dark" ? <><Sun />Light</> : <><Moon /> Dark</>}
      </Button>
    </section>
  );
}

export default App;
