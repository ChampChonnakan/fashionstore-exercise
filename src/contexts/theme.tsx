import { createContext, ReactNode, useContext, useState } from "react";

const ThemeContext = createContext({
  bgColorClassName: "bg-red-500",
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [bgColorScheme, setBgColorScheme] = useState("bg-slate-100");
  const toggleTheme = () => {
    setBgColorScheme((prev) => {
      if (prev === "bg-red-500") {
        return "bg-purple-200";
      } else {
        return "bg-red-500";
      }
    });
  };

  return (
    <ThemeContext.Provider
      value={{ bgColorClassName: bgColorScheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
