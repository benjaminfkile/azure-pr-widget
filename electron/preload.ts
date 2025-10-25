import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  set: (key: string, value: any) => ipcRenderer.invoke("store:set", key, value),
  get: (key: string) => ipcRenderer.invoke("store:get", key),
  delete: (key: string) => ipcRenderer.invoke("store:delete", key),
  minimize: () => ipcRenderer.send("window:minimize"),
  maximize: () => ipcRenderer.send("window:maximize"),
  close: () => ipcRenderer.send("window:close"),
  onThemeChanged: (callback: (theme: "light" | "dark") => void) => {
    ipcRenderer.on("theme:changed", (_, theme) => callback(theme));
  },
});
