import { KeyValue, IDictionary } from "./types/data_interfaces";

/**
 * Implements a more standardized dictionary data structure based on C#
 *
 * Notes:
 * - All keys are implicitly converted to string using .toString()
 * - all primitives and
 * - TODO: Look into method chaining. Ex: d.add(k1,v1).add(k2,v2).get(k1)
 * - TODO: Extend this class to implement SortedDictionary
 *
 */
class Dictionary implements IDictionary {
  // The object that actualy stored the key-values
  _items: KeyValue = {};

  // So you can do mydictionary.length
  length: number = 0;

  constructor() {
    // TODO: Accept an object or array for initialization
  }

  _getKeyAsString(key: any): string {
    if (key === undefined) {
      throw new TypeError("Spurv: key is undefined");
    }
    if (typeof key === "object") {
      return JSON.stringify(key);
    }
    return key.toString();
  }

  // Add a key value to the dictionary
  add(key: any, value: any) {
    const keyString: string = this._getKeyAsString(key);
    if (!(keyString in this._items)) {
      this.length++;
    }
    this._items[keyString] = value;
  }

  // Clear the dictionary
  clear() {
    this._items = {};
    this.length = 0;
  }

  // Check if the dictionary contains a key
  containsKey(key: any): boolean {
    const keyString: string = this._getKeyAsString(key);
    return Object.keys(this._items).includes(keyString);
  }

  // Check if the dictionary contains a value (works only for primitives)
  containsValue(key: any): boolean {
    const keyString: string = this._getKeyAsString(key);
    return Object.values(this._items).includes(keyString);
  }

  // Get value by key
  get(key: any): any {
    const keyString: string = this._getKeyAsString(key);
    return this._items[keyString] || undefined;
  }

  // Remove a key
  remove(key: any): void {
    const keyString: string = this._getKeyAsString(key);
    if (keyString in this._items) {
      this.length--;
    }
    delete this._items[keyString];
  }

  // Returns an array of keys
  keys(): string[] {
    return Object.keys(this._items);
  }

  // Returns an array of entries [key, value]
  entries(): KeyValue {
    return Object.entries(this._items);
  }

  // Returns an array of objects
  values(): any[] {
    return Object.values(this._items);
  }
}

export const dictionary = () => {
  return new Dictionary();
};