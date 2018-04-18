import {UniqueQueue} from '.';

describe('unique queue', () => {
  it('returns FIFO', () => {
    const queue = new UniqueQueue<number>();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.values()).toEqual([3, 2, 1]);
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
});