"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

// Create ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider Component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize from localStorage on first client render so we don't briefly render the wrong theme
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      if (typeof window !== "undefined") {
        return localStorage.getItem("darkMode") === "true";
      }
    } catch (e) {
      // ignore and fall through
    }
    return false;
  });

  const pathname = usePathname();

  // Re-apply the saved class on client-side route changes without forcing state flips
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("darkMode") === "true";
        if (saved) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } catch (e) {
        // ignore
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Apply theme and save preference to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("darkMode", darkMode.toString());
      // also set a cookie so the server can read the preference during SSR
      document.cookie = `darkMode=${darkMode}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch (e) {
      // ignore
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
