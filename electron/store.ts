import ElectronStore from "electron-store";

// Generic store (can hold any key/value pair)
const store = new ElectronStore<Record<string, any>>({
  name: "settings",
  defaults: {},
});

export const setValue = (key: string, value: any): void => {
  (store as any).set(key, value);
};

export const getValue = (key: string): any => {
  return (store as any).get(key);
};

export const deleteValue = (key: string): void => {
  (store as any).delete(key);
};
