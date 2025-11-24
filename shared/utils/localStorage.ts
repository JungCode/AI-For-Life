const storageUtils = {
  get: (key: string): string | null => {
    if (typeof window === "undefined") return null;

    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value) as string;
    }

    return null;
  },

  set: (key: string, value: string): void => {
    if (typeof window === "undefined") return;

    localStorage.setItem(key, JSON.stringify(value));
  },

  remove: (key: string): void => {
    if (typeof window === "undefined") return;

    localStorage.removeItem(key);
  },

  clear: (): void => {
    if (typeof window === "undefined") return;

    localStorage.clear();
  },
};

export { storageUtils };
