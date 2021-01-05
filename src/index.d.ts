
declare module CapacitorStorage {
  class CapacitorStorage {
    getItem(key: string) : object | string
    setItem(key: string, value: any): void
    removeItem(key: string) : void
    getAllKeys() : object | string
    clear() : void
  }
}