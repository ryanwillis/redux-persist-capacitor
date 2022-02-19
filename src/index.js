import {Storage} from '@capacitor/storage';

class CapacitorStorage {
  /**
   * The value from storage associated with the given key.
   *
   * @since 1.0.0
   * @param {string} key
   * @returns {Promise<string | null>}
   */
  async getItem(key) {
    const response = await Storage.get({key});

    return response.value;
  }

  /**
   * Set the value in storage for a given key.
   *
   * @since 1.0.0
   * @param {string} key
   * @param {string} value
   * @returns {Promise<void>}
   */
  async setItem(key, value) {
    await Storage.set({
      key,
      value
    });
  }

  /**
   * Remove the value from storage for a given key, if any.
   *
   * @since 1.0.0
   * @param {string} key
   * @returns {Promise<void>}
   */
  async removeItem(key) {
    await Storage.remove({key});
  }

  /**
   * Return the list of known keys in storage.
   *
   * @since 1.0.0
   * @returns {Promise<string[] | undefined>}
   */
  async getAllKeys() {
    const response = await Storage.keys();

    return response?.keys;
  }

  /**
   * Clear keys and values from storage.
   *
   * @since 1.0.0
   * @returns {Promise<void>}
   */
  async clear() {
    await Storage.clear();
  }
}

export default new CapacitorStorage();
