export type Factorial<T> = (n : T) => T | bigint;

export type Union<T extends number> = (...sets: Array<T>) => Array<T>;