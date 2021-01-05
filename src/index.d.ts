import capacitorStorage from "../../../src/store/capacitorStorage";

declare namespace CapacitorStorage {

  export interface CapacitorStorage {
    getItem(key: string) : object | string
    setItem(key: string, value: any): void
    removeItem(key: string) : void
    getAllKeys() : object | string
    clear() : void
  }

}

declare module CapacitorStorage {

  import C = CapacitorStorage.CapacitorStorage;
  export = C;

}

export default capacitorStorage;