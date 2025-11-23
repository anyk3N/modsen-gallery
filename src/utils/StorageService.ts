export class StorageService<T> {
  constructor(private key: string) {}

  get(): T | null {
    try {
      const item = localStorage.getItem(this.key);
      return item ? (JSON.parse(item) as T) : null;
    } catch {
      console.error(`Error reading from localStorage key "${this.key}"`);
      return null;
    }
  }

  set(value: T): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(value));
    } catch {
      console.error(`Error writing to localStorage key "${this.key}"`);
    }
  }

  remove(): void {
    localStorage.removeItem(this.key);
  }
}
