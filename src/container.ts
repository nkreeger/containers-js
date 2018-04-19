
// tslint:disable-next-line:no-any
export interface Container<T extends any> {
  // Insert a single value
  push(value: T): void;

  // Insert a list of values
  insertValues(values: T[]): void;

  // True if value is in container.
  has(value: T): boolean;

  values(): T[];

  // Length of container.
  size(): number;
}

// tslint:disable-next-line:no-any
export type compareFunc<T extends any> = (a: T, b: T) => number;
