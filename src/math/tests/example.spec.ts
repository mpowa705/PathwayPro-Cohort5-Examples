import { isEven } from "../example";

test("Should return Even when passing an even number", () => {
  // Arrange: Set up the inputs
  const a = 2;

  // Act: Call the function with the inputs
  const result = isEven(a);

  // Assert: Verify that the result matches the expected outcome
  expect(result).toBe("Even");
});
