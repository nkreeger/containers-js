import {SortedArray, UniqueQueue} from '.';

describe('UniqueQueue', () => {
  it('returns FIFO', () => {
    const queue = new UniqueQueue<number>();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.values()).toEqual([3, 2, 1]);
    expect(queue.size()).toBe(3);
  });
  it('pushes old objects if value is supplied', () => {
    const queue = new UniqueQueue<number>(5);
    for (let i = 0; i < 10; i++) {
      queue.push(i);
    }
    expect(queue.values()).toEqual([9, 8, 7, 6, 5]);
  });
  it('should handle unique values', () => {
    const queue = new UniqueQueue<number>();
    queue.push(1);
    queue.push(2);
    queue.push(2);
    queue.push(2);
    expect(queue.values()).toEqual([2, 1]);
  });
  it('should handle unique values with size', () => {
    const queue = new UniqueQueue<number>(3);
    queue.push(1);
    queue.push(2);
    for (let i = 0; i < 3; i++) {
      queue.push(i);
    }
    expect(queue.values()).toEqual([0, 2, 1]);
  });
  it('should report contains key', () => {
    const queue = new UniqueQueue<number>();
    queue.push(1);
    expect(queue.has(1)).toBe(true);
    expect(queue.has(2)).toBe(false);
  });
  it('pushes array elements', () => {
    const queue = new UniqueQueue<string>();
    queue.push('test');
    const items = ['test', 'test2', 'test3', 'test4'];
    queue.insertValues(items);
    expect(queue.values()).toEqual(['test4', 'test3', 'test2', 'test']);
  });
});

describe('SortedArray', () => {
  it('insert sort on push', () => {
    const c = new SortedArray<number>();
    c.push(10);
    c.push(4);
    c.push(5);
    expect(c.values()).toEqual([4, 5, 10]);
    expect(c.size()).toBe(3);
  });
  it('insert sort on insertValues', () => {
    const c = new SortedArray<number>();
    c.insertValues([50, 10, 15]);
    expect(c.values()).toEqual([10, 15, 50]);
    expect(c.size()).toBe(3);
  });
  it('insert with custom compare func', () => {
    const c = new SortedArray<number>((a, b) => {
      if (a === b) {
        return 0;
      }
      return a < b ? 1 : -1;
    });
    c.push(10);
    c.push(4);
    c.push(5);
    expect(c.values()).toEqual([10, 5, 4]);
    expect(c.size()).toBe(3);
  });
  it('insertValues with custom compare func', () => {
    const c = new SortedArray<number>((a, b) => {
      if (a === b) {
        return 0;
      }
      return a < b ? 1 : -1;
    });
    c.insertValues([100, 600, 40, 1000]);
    expect(c.values()).toEqual([1000, 600, 100, 40]);
    expect(c.size()).toBe(4);
  });
});