import { add } from '../add';

/**
 * A positive test case checks that the function behaves as expected under normal conditions.
 * This follows the Arrange-Act-Assert (AAA) pattern for clarity and structure.
 *
 * The Arrange step sets up the test input, the Act step executes the function, 
 * and the Assert step checks that the result matches the expected output.
 */

test('Should return 3 when adding 1 + 2 (positive case)', () => {
  // Arrange: Set up the inputs
  const a = 1;
  const b = 2;

  // Act: Call the function with the inputs
  const result = add(a, b);

  // Assert: Verify that the result matches the expected outcome
  expect(result).toBe(3);
});

/**
 * A negative test case ensures the function does not return an incorrect result.
 * Again, following the Arrange-Act-Assert pattern for clarity.
 * Negative test cases are good to write after fixing a bug to ensure that the bug never occurs again.
 */
test('Should not return 47 when adding 1 + 2 (negative case)', () => {
  // Arrange: Set up the inputs
  const a = 1;
  const b = 2;

  // Act: Call the function with the inputs
  const result = add(a, b);

  // Assert: Ensure the result is NOT 47
  expect(result).not.toBe(47);
});
