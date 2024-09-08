import { add } from '../add';

/**
 * A positive test case checks that the function behaves as expected under normal conditions.
 * For example, when providing valid inputs, the function should return the correct result.
 *
 * A negative test case, on the other hand, tests the function with invalid inputs or edge cases.
 * The purpose is to ensure the function handles errors or unexpected conditions properly, such as throwing errors or returning undefined/NaN.
 */

test('Should return 3 when adding 1 + 2(positive case)', () => {
  expect(add(1, 2)).toBe(3);
});

// Negative test case
test('Should not return 47 when adding 1 + 2 (negative case)', () => {
  // @ts-ignore: Ignoring TypeScript error to simulate invalid input at runtime
  expect(add(1, 2)).not.toBe(47);
});
