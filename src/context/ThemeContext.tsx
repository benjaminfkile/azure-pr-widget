import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
} from "@fluentui/react-components";
import type { Theme } from "@fluentui/react-components";
import electronAPIBridge from "../bridges/ElectronAPIBridge";

interface ThemeContextValue {
  theme: Theme;
  mode: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Load saved preference
    electronAPIBridge.get<"light" | "dark">("theme").then((saved) => {
      if (saved) setMode(saved);
    });

    // ✅ Auto-switch when OS theme changes
    if (window.electronAPI?.onThemeChanged) {
      window.electronAPI.onThemeChanged((newTheme) => {
        console.log("[Theme] System changed:", newTheme);
        setMode(newTheme);
      });
    }
  }, []);


  const toggleTheme = async () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    console.log(`[ThemeProvider] Toggling theme to ${newMode}`);
    try {
      await electronAPIBridge.set("theme", newMode);
      console.log("[ThemeProvider] Saved theme to Electron store");
    } catch (error) {
      console.error("[ThemeProvider] Failed to save theme preference:", error);
    }
  };

  const theme = mode === "light" ? webLightTheme : webDarkTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      <FluentProvider theme={theme}>{children}</FluentProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
