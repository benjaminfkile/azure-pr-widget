export {};

declare global {
  interface Window {
    electronAPI: {
      set: (key: string, value: any) => Promise<void>;
      get: (key: string) => Promise<any>;
      delete: (key: string) => Promise<void>;
      minimize: () => Promise<void>;
      maximize: () => Promise<void>;
      close: () => Promise<void>;
      onThemeChanged?: (callback: (theme: "light" | "dark") => void) => void;
    };
  }
}
