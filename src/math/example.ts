/**
 * Adds two numbers and returns the result.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
export const isEven = (a: number): string => {
  if ((a % 2) === 0) {
    return "Even";
  } else {
    return "Odd";
  } 
};
