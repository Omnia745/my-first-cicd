const { add } = require('./math');

test('يجمع 2 + 3 يساوي 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('يجمع -1 + 1 يساوي 0', () => {
  expect(add(-1, 1)).toBe(0);
});
