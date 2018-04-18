
// tslint:disable-next-line:no-any
export class UniqueQueue<Value extends any> {
  private size: number;
  private keys: Set<Value>;
  private items: Value[];

  constructor(size = 0) {
    this.size = size;
    this.keys = new Set();
    this.items = [];
  }

  push(value: Value) {
    if (!this.keys.has(value)) {
      this.keys.add(value);
      this.items.unshift(value);
      if (this.size > 0 && this.items.length > this.size) {
        const key = this.items.pop();
        this.keys.delete(key);
      }
    }
  }

  values(): Value[] {
    return this.items;
  }

  has(value: Value): boolean {
    return this.keys.has(value);
  }
}