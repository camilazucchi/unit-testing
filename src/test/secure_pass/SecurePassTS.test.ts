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
        const actual = sut.checkPassword("12345678");
        expect(actual).toBe(true);
    });
});