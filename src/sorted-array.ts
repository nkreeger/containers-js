import {compareFunc, Container} from './container';

// tslint:disable-next-line:no-any
export class SortedArray<T extends any> implements Container<T> {
  items: T[];
  compareFunc: compareFunc<T>;

  constructor(compareFunc?: compareFunc<T>) {
    this.items = [];
    this.compareFunc = compareFunc;
  }

  push(value: T): void {
    this.items.push(value);
    this.sort();
  }

  insertValues(values: T[]): void {
    values.forEach((v) => {
      this.push(v);
    });
  }

  has(value: T): boolean {
    return this.items.indexOf(value) > -1;
  }

  values(): T[] {
    return this.items;
  }

  size(): number {
    return this.items.length;
  }

  protected sort(): void {
    let index = this.items.length - 1;
    while (index > 0) {
      const i = index;
      const j = --index;

      const compareResult = this.compareFunc !== undefined ?
          this.compareFunc(this.items[i], this.items[j]) :
          this.compare(this.items[i], this.items[j]);

      if (compareResult < 0) {
        const temp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = temp;
      }
    }
  }

  protected compare(a: T, b: T): number {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  }
}