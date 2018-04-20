
// tslint:disable-next-line:no-any
export interface Container<T extends any> {
  // Insert a single value
  push(value: T): void;

  // Insert a list of values
  insertValues(values: T[]): void;

  // True if value is in container.
  has(value: T): boolean;

  // Returns list of values in order.
  values(): T[];

  // Removes all elements.
  clear(): void;

  // Length of container.
  size(): number;
}

// tslint:disable-next-line:no-any
export type compareFunc<T extends any> = (a: T, b: T) => number;
