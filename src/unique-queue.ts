import {Container} from './container';

// tslint:disable-next-line:no-any
export class UniqueQueue<T extends any> implements Container<T> {
  private maxSize: number;
  private keys: Set<T>;
  private items: T[];

  constructor(maxSize = 0) {
    this.maxSize = maxSize;
    this.keys = new Set();
    this.items = [];
  }

  push(value: T) {
    if (!this.keys.has(value)) {
      this.keys.add(value);
      this.items.unshift(value);
      if (this.maxSize > 0 && this.items.length > this.maxSize) {
        const key = this.items.pop();
        this.keys.delete(key);
      }
    }
  }

  insertValues(values: T[]): void {
    values.forEach((v) => this.push(v));
  }

  has(value: T): boolean {
    return this.keys.has(value);
  }

  values(): T[] {
    return this.items;
  }

  clear(): void {
    this.items = [];
    this.keys = new Set();
  }

  size(): number {
    return this.items.length;
  }
}