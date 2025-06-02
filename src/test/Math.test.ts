import { sum } from "../app/Math";

describe("Calculator", () => {
    it.skip("Should return the sum of two numbers", () => {
        // Arrange
        const sut = sum;
        const num1 = 5;
        const num2 = 3;
        const expected = 8;

        // Act
        const actual = sut(num1, num2);

        // Assert
        expect(actual).toBe(expected);
    })
});