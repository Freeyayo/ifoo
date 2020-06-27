import { factorial } from '../src/index';

test('factorial(5)', () => {
    expect(factorial(5)).toBe(120);
});

test('factorial(0)', () => {
    expect(factorial(0)).toBe(1);
});

test('factorial(-1)', () => {
    expect(factorial(-1)).toBe(1);
});

test('factorial("spurv")', () => {
    expect(factorial(-1)).toBe(1);
});