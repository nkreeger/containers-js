# containers.js
Various data structures for JavaScript - implemented in TypeScript.

## Installation:
```
$ npm install containers.js
or
$ yarn add containers.js
```

## Implemented containers:
- SortedArray<T>
  - An array that automatically sorts items pushed into the container.
  - Provides optional compare function to provide custom sorting.
  
- UniqueQueue<T>
  - Ensures that items in queue are truley unique.
  - Optional argument to keep the queue at a fixed length.
  
## SortedArray

Basic usage:
```ts
const c = new SortedArray<number>();
c.push(3);
c.push(2);
c.push(5);
c.values();  // [2, 3, 5]
```

With custom compare function:
```ts
const c = new SortedArray<number>((a, b) => {
  if (a === b) {
    return 0;
  }
  return a < b ? 1 : -1;
});
c.insertValues([1, 2, 3, 4]);
c.values();  // [4, 3, 2, 1];
```

## UniqueQueue

Basic usage:
```ts
const queue = new UniqueQueue<number>();
queue.push(1);
queue.push(2);
queue.push(2);
queue.push(3);
queue.values();  // [3, 2, 1]
```

With fixed queue-length:
```ts
const queue = new UniqueQueue<number>(5);
for (let i = 0; i < 10; i++) {
  queue.push(i);
}
expect(queue.values()).toEqual([9, 8, 7, 6, 5]);
```

### Development:

Setup:
```
yarn
```

Running tests:
```
$ yarn test
```
