const sum = require('./index');
/* -- Common Matchers -- */
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ two: 2, one: 1 });
});

/* -- Truthiness -- */
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('true/false', () => {
  const z = 1 === 2;
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
  // expect(z).toBeTruthy();
});

/* -- Numbers -- */
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);          // This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

/* -- Strings -- */
describe('test strings', () => {
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
})

/* -- Arrays and iterables -- */
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

/* -- Exceptions -- */
function forceThrowError() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => forceThrowError()).toThrow();
  expect(() => forceThrowError()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => forceThrowError()).toThrow('you are using the wrong JDK');
  expect(() => forceThrowError()).toThrow(/JDK/);
});