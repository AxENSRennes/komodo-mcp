// mogh_auth_client, used by the official Komodo TypeScript client, reads
// localStorage at module initialization even when API-key authentication is
// used from Node.js. Keep that browser-only state ephemeral in this process.
if (!("localStorage" in globalThis)) {
  const values = new Map<string, string>();
  const storage: Storage = {
    get length() {
      return values.size;
    },
    clear() {
      values.clear();
    },
    getItem(key) {
      return values.get(key) ?? null;
    },
    key(index) {
      return [...values.keys()][index] ?? null;
    },
    removeItem(key) {
      values.delete(key);
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
  };
  Object.defineProperty(globalThis, "localStorage", {
    configurable: false,
    enumerable: false,
    value: storage,
    writable: false,
  });
}

