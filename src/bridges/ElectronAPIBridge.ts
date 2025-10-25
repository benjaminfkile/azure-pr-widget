const electronAPIBridge = {
  async set(key: string, value: any): Promise<void> {
    console.log(`electronAPIBridge.set(${key}) => ${value}`)
    if (!window.electronAPI?.set) throw new Error("electronAPI.set not available");
    await window.electronAPI.set(key, value);
  },

  async get<T = any>(key: string): Promise<T | undefined> {
    console.log(`electronAPIBridge.get(${key})`)
    if (!window.electronAPI?.get) throw new Error("electronAPI.get not available");
    return window.electronAPI.get(key);
  },

  async delete(key: string): Promise<void> {
    if (!window.electronAPI?.delete) throw new Error("electronAPI.delete not available");
    await window.electronAPI.delete(key);
  },

  async minimize(): Promise<void> {
    if (!window.electronAPI?.minimize) throw new Error("electronAPI.minimize not available");
    await window.electronAPI.minimize();
  },

  async maximize(): Promise<void> {
    if (!window.electronAPI?.maximize) throw new Error("electronAPI.maximize not available");
    await window.electronAPI.maximize();
  },

  async close(): Promise<void> {
    if (!window.electronAPI?.close) throw new Error("electronAPI.close not available");
    await window.electronAPI.close();
  },
};

export default electronAPIBridge;
