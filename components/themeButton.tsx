import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {/* <select
        value={theme}
        className="float-right"
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select> */}
      <div className="bg-light-gray-500 hover:bg-dark-700 float-right flex cursor-pointer flex-wrap p-1">
        <span className="px-2 text-sm font-small text-gray-900 hover:text-blue-600 dark:text-gray-300">
          change theme
        </span>
        {currentTheme === "dark" ? (
          <BsFillMoonFill
            className="h-5 w-5 cursor-pointer"
            onClick={() => setTheme("Light")}
          />
        ) : (
          <BsFillSunFill
            className="h-5 w-5 cursor-pointer text-yellow-500"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </>
  );
};
export default ThemeSwitch;
