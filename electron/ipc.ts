import { ipcMain } from "electron";
import { setValue, getValue, deleteValue } from "./store";

export const registerIpcHandlers = () => {
  ipcMain.handle("store:set", async (_, key: string, value: any) => {
    setValue(key, value);
    return true;
  });

  ipcMain.handle("store:get", async (_, key: string) => {
    return getValue(key);
  });

  ipcMain.handle("store:delete", async (_, key: string) => {
    deleteValue(key);
    return true;
  });
};
