// Criamos um ENUM para definir as mensagens de erro:
export enum PasswordErrors {
    SHORT = "Password is too short.",
    NO_UPPER_CASE = "Upper case letter required.",
    NO_LOWER_CASE = "Lower case letter required."
}

// Define a estrutura do objeto que será usado na validação de senha:
export interface CheckResult {
    valid: boolean,
    reasons: PasswordErrors[]
}

// Classe principal com a lógica de validação de senha:
export class SecurePass {

    public checkPassword(password: string): CheckResult {

        // Criamos uma lista vazia chamada reasons, ela será preenchida com os erros encontrados na senha:
        const reasons: PasswordErrors[] = [];

        this.checkForLength(password, reasons);
        this.checkForLowerCase(password, reasons);
        this.checkForUpperCase(password, reasons);

        // O método retorna um objeto do tipo CheckResult:
        return {
            // Verifica se a lista reasons tem algum item, se tiver mais de 0 itens, significa que houve erros, então valid será false.
            // Se tiver 0 itens, significa que não houve erros, então valid será true.
            valid: reasons.length > 0 ? false : true,
            reasons: reasons
        }
    }

    // Refatoramos as validações anteriores extraindo sua lógica em métodos, para dar mais organização para o nosso código.
    private checkForLength(password: string, reasons: PasswordErrors[]) {
        // Verifica se o comprimento da senha é menor do que 8 chars:
        if (password.length < 8) {
            reasons.push(PasswordErrors.SHORT);
        }
    }

    private checkForLowerCase(password: string, reasons: PasswordErrors[]) {
        // Compara a senha original com a mesma senha convertida para todas as letras minúsculas, se as duas forem iguais, significa que a senha não continha nenhuma letra maiúscula:
        if (password == password.toLowerCase()) {
            reasons.push(PasswordErrors.NO_UPPER_CASE);
        }
    }

    private checkForUpperCase(password: string, reasons: PasswordErrors[]) {
        // Mesma coisa da comparação acima, trocando somente a conversão para todas as letras maísculas, se as duas forem iguais, a senha não continha nenhuma letra minúscula.
        if (password == password.toUpperCase()) {
            reasons.push(PasswordErrors.NO_LOWER_CASE);
        }
    }
}