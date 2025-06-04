import { SecurePass } from "../../app/secure_pass/SecurePassTS";

// Agrupa os testes relacionados
describe("Secure Pass Test Suite", () => {
    // System Under Test
    let sut: SecurePass; // sut será uma instância da classe SecurePass

    beforeEach(() => {
        sut = new SecurePass(); // Instância de SecurePass
    });

    // Test 1: Password with less than 8 characters
    it("Password with less than 8 characters is invalid", () => {
        const actual = sut.checkPassword("1234567");
        expect(actual).toBe(false);
    });

    // Test 2: Password with more or equal than 8 characters 
    it("Password with more or equal than 8 characters is valid", () => {
        const actual = sut.checkPassword("1234567bA");
        expect(actual).toBe(true);
    });

    // Test 3: Password with no upper case letter
    it("Password with no upper case letter is invalid", () => {
        const actual = sut.checkPassword("1234abcd");
        expect(actual).toBe(false);
    });

    // Test 4: Password with upper case letter
    it("Password with upper case letter is valid", () => {
        const actual = sut.checkPassword("1234Abcd");
        expect(actual).toBe(true);
    });

    // Test 5: Password with no lower case letter
    it("Password with no lower case letter is invalid", () => {
        const actual = sut.checkPassword("123456ABCD");
        expect(actual).toBe(false);
    });

    // Test 6: Password with lower case letter
    it("Password with lower case letter is valid", () => {
        const actual = sut.checkPassword("123456AbCD");
        expect(actual).toBe(true);
    });
});