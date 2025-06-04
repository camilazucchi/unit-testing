import { SecurePass } from "../../app/secure_pass/SecurePassTS";

// Agrupa os testes relacionados
describe("Secure Pass Test Suite", () => {
    // System Under Test
    let sut: SecurePass; // sut será uma instância da classe SecurePass

    beforeEach(() => {
        sut = new SecurePass(); // Instância de SecurePass
    });

    it("Should do nothing for the moment", () => {
        sut.checkPassword();
    });
});