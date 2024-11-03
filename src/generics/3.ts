function merge<T extends { [key: string]: any }>(objA: T, objB: T): T {
  return Object.assign(objA, objB);
}
