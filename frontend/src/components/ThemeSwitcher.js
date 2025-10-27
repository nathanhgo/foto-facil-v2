import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme} style={{ position: 'fixed', top: 10, right: 10, zIndex: 999 }}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
