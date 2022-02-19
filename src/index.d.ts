declare var _default: CapacitorStorage;
export default _default;
declare class CapacitorStorage {
    /**
     * The value from storage associated with the given key.
     *
     * @since 1.0.0
     * @param {string} key
     * @returns {Promise<string | null>}
     */
    getItem(key: string): Promise<string | null>;
    /**
     * Set the value in storage for a given key.
     *
     * @since 1.0.0
     * @param {string} key
     * @param {string} value
     * @returns {Promise<void>}
     */
    setItem(key: string, value: string): Promise<void>;
    /**
     * Remove the value from storage for a given key, if any.
     *
     * @since 1.0.0
     * @param {string} key
     * @returns {Promise<void>}
     */
    removeItem(key: string): Promise<void>;
    /**
     * Return the list of known keys in storage.
     *
     * @since 1.0.0
     * @returns {Promise<string[] | undefined>}
     */
    getAllKeys(): Promise<string[] | undefined>;
    /**
     * Clear keys and values from storage.
     *
     * @since 1.0.0
     * @returns {Promise<void>}
     */
    clear(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map