"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("electronAPI", {
    set: (key, value) => electron_1.ipcRenderer.invoke("store:set", key, value),
    get: (key) => electron_1.ipcRenderer.invoke("store:get", key),
    delete: (key) => electron_1.ipcRenderer.invoke("store:delete", key),
    minimize: () => electron_1.ipcRenderer.send("window:minimize"),
    maximize: () => electron_1.ipcRenderer.send("window:maximize"),
    close: () => electron_1.ipcRenderer.send("window:close"),
    onThemeChanged: (callback) => {
        electron_1.ipcRenderer.on("theme:changed", (_, theme) => callback(theme));
    },
});
