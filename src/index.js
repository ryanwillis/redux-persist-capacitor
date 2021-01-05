
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export class CapacitorStorage {

  async getItem(key) {

    const value = await Storage.get({key});

    return value.value;

  }

  async setItem(key, value) {

    await Storage.set({
      key,
      value
    });

  }

  async removeItem(key) {

    await Storage.remove({ key });

  }

  async getAllKeys() {

    const keys = await Storage.keys();

    return keys;

  }

  async clear() {
    Storage.clear();

  }

}

export default new CapacitorStorage();