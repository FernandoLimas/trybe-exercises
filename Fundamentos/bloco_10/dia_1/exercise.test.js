const exercise = (a, b) => a + b;

test('sums two values', () => {
  expect(exercise(2, 3)).toEqual(5);
});
