import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";
import * as path from "path";
import Store from "electron-store";

let mainWindow: BrowserWindow | null = null;

// ✅ Create persistent store (lives under AppData/Roaming/<appname>/config.json)
const store = new Store<Record<string, unknown>>({ schema: {} }) as any;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "../dist-electron/preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const devUrl = process.env.VITE_DEV_SERVER_URL;
  if (devUrl) mainWindow.loadURL(devUrl);
  else mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));

  mainWindow.webContents.openDevTools({ mode: "detach" });

  // ✅ Send current system theme when page loads
  mainWindow.webContents.once("did-finish-load", () => {
    const theme = nativeTheme.shouldUseDarkColors ? "dark" : "light";
    console.log(`[Theme] Sending initial theme → ${theme}`);
    mainWindow?.webContents.send("theme:changed", theme);
  });

  // ✅ Listen for OS theme changes
  nativeTheme.on("updated", () => {
    const mode = nativeTheme.shouldUseDarkColors ? "dark" : "light";
    console.log(`[Theme] OS theme changed → ${mode}`);
    mainWindow?.webContents.send("theme:changed", mode);
  });
}

// ✅ IPC handlers with persistence
ipcMain.handle("store:set", (_event, key: string, value: any) => {
  console.log(`[IPC] store:set ${key}=${value}`);
  store.set(key, value);
  return true;
});

ipcMain.handle("store:get", (_event, key: string) => {
  const value = store.get(key);
  console.log(`[IPC] store:get ${key} =>`, value);
  return value ?? null;
});

ipcMain.handle("store:delete", (_event, key: string) => {
  console.log(`[IPC] store:delete ${key}`);
  store.delete(key);
  return true;
});

ipcMain.handle("store:clear", () => {
  console.log("[IPC] store:clear all keys");
  store.clear();
  return true;
});

// ✅ Window controls
ipcMain.on("window:minimize", () => mainWindow?.minimize());
ipcMain.on("window:maximize", () =>
  mainWindow?.isMaximized() ? mainWindow.unmaximize() : mainWindow?.maximize()
);
ipcMain.on("window:close", () => mainWindow?.close());

// ✅ App ready
app.whenReady().then(createWindow);
