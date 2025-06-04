export class SecurePass {
    public checkPassword(password: string): boolean {
        if (password.length < 8) {
            return false;
        }

        // Se a string password for igual à string password com lowercase, significa que nossa senha não tem pelo menos um caracter em upper case.
        if (password == password.toLowerCase()) {
            return false;
        }

        if (password == password.toUpperCase()) {
            return false;
        }

        return true;
    }
}